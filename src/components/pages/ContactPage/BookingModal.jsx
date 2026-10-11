'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './BookingModal.css';

const SLOT_RANGE_DAYS = 14;

const TIMEZONE_OPTIONS = [
	{ value: 'America/Los_Angeles', label: 'Pacific Time (PT)' },
	{ value: 'America/Denver', label: 'Mountain Time (MT)' },
	{ value: 'America/Chicago', label: 'Central Time (CT)' },
	{ value: 'America/New_York', label: 'Eastern Time (ET)' },
	{ value: 'Europe/London', label: 'United Kingdom (GMT/BST)' },
	{ value: 'Europe/Berlin', label: 'Central European Time (CET)' },
	{ value: 'Asia/Dubai', label: 'Gulf Standard Time (GST)' },
	{ value: 'Asia/Kolkata', label: 'India Standard Time (IST)' },
	{ value: 'Asia/Singapore', label: 'Singapore Time (SGT)' },
	{ value: 'Australia/Sydney', label: 'Australian Eastern Time (AET)' }
];

function BookingModal({ open, onClose }) {
	const region = process.env.NEXT_PUBLIC_REGION || 'GLOBAL';
	const isIndia = region === 'IN';
	const [timeZone, setTimeZone] = useState(null);
	const [detectedTz, setDetectedTz] = useState(null);
	const [slotsByDay, setSlotsByDay] = useState({});
	const [loading, setLoading] = useState(false);
	const [loadError, setLoadError] = useState(null);
	const [selectedDay, setSelectedDay] = useState(null);
	const [selectedSlot, setSelectedSlot] = useState(null);
	const [form, setForm] = useState({ name: '', email: '', phone: '' });
	const [submitting, setSubmitting] = useState(false);
	const [bookingError, setBookingError] = useState(null);
	const [booking, setBooking] = useState(null);
	const closeRef = useRef(null);

	useEffect(() => {
		const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC';
		setDetectedTz(tz);
		setTimeZone(tz);
	}, []);

	const fetchSlots = useCallback(async tz => {
		setLoading(true);
		setLoadError(null);
		try {
			const today = new Date();
			const rangeEnd = new Date(today);
			rangeEnd.setDate(rangeEnd.getDate() + SLOT_RANGE_DAYS);
			const res = await fetch(
				`/api/calcom/slots?start=${today.toISOString().slice(0, 10)}&end=${rangeEnd.toISOString().slice(0, 10)}&timeZone=${encodeURIComponent(tz)}`
			);
			const body = await res.json();
			if (!res.ok || body.status !== 'success') {
				throw new Error(body.error || 'Could not load available slots.');
			}
			setSlotsByDay(body.data || {});
		} catch (e) {
			setLoadError(e.message || 'Could not load available slots. Please try again shortly.');
		} finally {
			setLoading(false);
		}
	}, []);

	useEffect(() => {
		if (open && timeZone) fetchSlots(timeZone);
	}, [open, timeZone, fetchSlots]);

	const days = useMemo(
		() => Object.keys(slotsByDay).filter(day => slotsByDay[day]?.length).sort(),
		[slotsByDay]
	);

	useEffect(() => {
		setSelectedDay(prev => (prev && days.includes(prev) ? prev : days[0] || null));
	}, [days]);

	const timezoneChoices = useMemo(() => {
		if (!detectedTz) return [];
		if (TIMEZONE_OPTIONS.some(option => option.value === detectedTz)) return TIMEZONE_OPTIONS;
		return [
			{ value: detectedTz, label: `Your device timezone (${detectedTz})` },
			...TIMEZONE_OPTIONS
		];
	}, [detectedTz]);

	useEffect(() => {
		if (!open) return undefined;
		document.body.style.overflow = 'hidden';
		const handleKeyDown = event => {
			if (event.key === 'Escape') onClose();
		};
		document.addEventListener('keydown', handleKeyDown);
		const focusTimer = setTimeout(() => closeRef.current?.focus(), 300);
		return () => {
			document.body.style.overflow = '';
			document.removeEventListener('keydown', handleKeyDown);
			clearTimeout(focusTimer);
		};
	}, [open, onClose]);

	useEffect(() => {
		if (!open) {
			setBooking(null);
			setBookingError(null);
		}
	}, [open]);

	function selectDay(day) {
		setSelectedDay(day);
		setSelectedSlot(null);
		setBookingError(null);
	}

	function selectSlot(slot) {
		setSelectedSlot(slot);
		setBookingError(null);
	}

	function handleTimeZoneChange(event) {
		setTimeZone(event.target.value);
		setSelectedSlot(null);
		setBookingError(null);
	}

	function handleFieldChange(field, value) {
		setForm(prev => ({ ...prev, [field]: value }));
	}

	async function handleSubmit(event) {
		event.preventDefault();
		if (submitting) return;
		setSubmitting(true);
		setBookingError(null);
		try {
			const res = await fetch('/api/calcom/booking', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					start: selectedSlot,
					name: form.name,
					email: form.email,
					...(form.phone.trim() ? { phone: form.phone } : {}),
					timeZone
				})
			});
			const body = await res.json();
			if (res.ok && body.status === 'success') {
				setBooking(body.data);
			} else {
				setBookingError(body.error || 'Booking failed. Please try again.');
				if (res.status === 409) {
					setSelectedSlot(null);
					fetchSlots(timeZone);
				}
			}
		} catch {
			setBookingError('Booking failed. Please check your connection and try again.');
		} finally {
			setSubmitting(false);
		}
	}

	function formatDate(day) {
		const date = new Date(`${day}T00:00:00`);
		return {
			weekday: date.toLocaleDateString([], { weekday: 'short' }),
			day: date.getDate(),
			month: date.toLocaleDateString([], { month: 'short' })
		};
	}

	function formatSlot(slot) {
		return new Date(slot).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', timeZone });
	}

	function formatSlotSummary(slot) {
		return new Date(slot).toLocaleString([], {
			weekday: 'long',
			month: 'long',
			day: 'numeric',
			hour: 'numeric',
			minute: '2-digit',
			timeZone
		});
	}

	function formatBookedRange(start, end) {
		const startDate = new Date(start);
		const dateLine = startDate.toLocaleDateString([], {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			timeZone
		});
		const startLine = startDate.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', timeZone });
		const endDate = new Date(end || '');
		if (!Number.isNaN(endDate.getTime())) {
			const endLine = endDate.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit', timeZone });
			return `${dateLine}, ${startLine} — ${endLine}`;
		}
		return `${dateLine}, ${startLine}`;
	}

	const slotTimes = selectedDay ? (slotsByDay[selectedDay] || []).map(slot => slot.start) : [];
	const firstName = form.name.trim().split(' ')[0];

	if (!open) return null;

	return (
		<div className="booking-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="booking-modal-title">
			<div className="booking-modal-bg" onClick={onClose} aria-hidden="true" />
			<div className="booking-modal-box">
				<button
					ref={closeRef}
					type="button"
					className="booking-modal-close"
					onClick={onClose}
					aria-label="Close booking window"
				>
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
						<line x1="18" y1="6" x2="6" y2="18" />
						<line x1="6" y1="6" x2="18" y2="18" />
					</svg>
				</button>

				{booking ? (
					<div className="booking-modal-success" role="status">
						<svg viewBox="0 0 84 84" aria-hidden="true">
							<circle cx="42" cy="42" r="30" />
							<path d="M29 43l9 9 18-20" />
						</svg>
						<h4>You&apos;re booked in</h4>
						<p>
							{firstName}, your consultation is confirmed for {formatBookedRange(booking.start, booking.end)}.
						</p>
						{typeof booking.location === 'string' && booking.location.startsWith('http') && (
							<a href={booking.location} target="_blank" rel="noopener noreferrer" className="booking-modal-meeting">
								Your Meeting Link
							</a>
						)}
						<div>
							<button type="button" className="booking-modal-confirm" onClick={onClose}>
								Done
							</button>
						</div>
					</div>
				) : (
					<>
						<div className="booking-modal-eye">Consultations</div>
						<h3 id="booking-modal-title" className="booking-modal-title">
							Book an <span className="italic-serif">Appointment</span>
						</h3>
						<p className="booking-modal-sub">
							Choose a convenient time and connect with our team for a personalised discussion about your
							intellectual property needs.
						</p>

						{loadError && (
							<div className="booking-modal-alert">
								<span>{loadError}</span>
								<button type="button" onClick={() => fetchSlots(timeZone)}>Retry</button>
							</div>
						)}

						{loading ? (
							<div className="booking-modal-skeleton" role="status" aria-label="Loading available appointment times">
								<div className="booking-modal-label">1 · Choose a Date</div>
								<div className="booking-modal-dates">
									{[0, 1, 2, 3, 4, 5].map(i => (
										<span
											key={i}
											className="booking-modal-day booking-modal-skel"
											style={{ animationDelay: `${i * 60}ms` }}
										/>
									))}
								</div>
								<div className="booking-modal-label">2 · Choose a Time</div>
								<div className="booking-modal-times">
									{[0, 1, 2, 3, 4, 5, 6, 7].map(i => (
										<span
											key={i}
											className="booking-modal-time booking-modal-skel"
											style={{ animationDelay: `${i * 60}ms` }}
										/>
									))}
								</div>
								<p className="booking-modal-loading-note">
									Finding available times
									<span className="booking-modal-dot" />
									<span className="booking-modal-dot" />
									<span className="booking-modal-dot" />
								</p>
							</div>
						) : days.length ? (
							<>
								<div className="booking-modal-label">1 · Choose a Date</div>
								<div className="booking-modal-dates">
									{days.map((day, index) => {
										const f = formatDate(day);
										return (
											<button
												key={day}
												type="button"
												style={{ animationDelay: `${150 + index * 40}ms` }}
												className={`booking-modal-day${selectedDay === day ? ' on' : ''}`}
												onClick={() => selectDay(day)}
											>
												<small>{f.weekday}</small>
												<b>{f.day}</b>
												<small>{f.month}</small>
											</button>
										);
									})}
								</div>

								{slotTimes.length ? (
									<>
										<div className="booking-modal-label">2 · Choose a Time</div>
										<div className="booking-modal-times">
											{slotTimes.map((slot, index) => (
												<button
													key={slot}
													type="button"
													style={{ animationDelay: `${300 + index * 25}ms` }}
													className={`booking-modal-time${selectedSlot === slot ? ' on' : ''}`}
													onClick={() => selectSlot(slot)}
												>
													{formatSlot(slot)}
												</button>
											))}
										</div>
									</>
								) : (
									<p className="booking-modal-empty">No times left on this date. Please pick another day.</p>
								)}

								<form onSubmit={handleSubmit}>
									<div className={`booking-modal-details${selectedSlot ? ' show' : ''}`}>
										<input
											type="text"
											placeholder="Full name"
											autoComplete="name"
											maxLength={120}
											value={form.name}
											onChange={e => handleFieldChange('name', e.target.value)}
										/>
										<input
											type="email"
											placeholder="Email"
											autoComplete="email"
											maxLength={254}
											value={form.email}
											onChange={e => handleFieldChange('email', e.target.value)}
										/>
										<input
											type="tel"
											placeholder="Phone / WhatsApp (optional)"
											autoComplete="tel"
											maxLength={20}
											className="full"
											value={form.phone}
											onChange={e => handleFieldChange('phone', e.target.value)}
										/>
									</div>

									<div className="booking-modal-foot">
										<div className="booking-modal-sum">
											{selectedSlot ? 'Your slot' : 'Select a date and time'}
											<b>{selectedSlot ? formatSlotSummary(selectedSlot) : '\u00A0'}</b>
										</div>
										<button
											type="submit"
											className="booking-modal-confirm"
											disabled={!selectedSlot || !form.name.trim() || !form.email.trim() || submitting}
										>
											{submitting ? 'Booking…' : 'Confirm Appointment'}
										</button>
									</div>
									{bookingError && <p className="booking-modal-error">{bookingError}</p>}
								</form>
							</>
						) : (
							<p className="booking-modal-empty">
								No times available in the next {SLOT_RANGE_DAYS} days. Please check back soon or email
								inbox@lexvuip.com.
							</p>
						)}

						<div className="booking-modal-tz">
							{!isIndia ? (
								<label>
									Times shown in
									<select value={timeZone || ''} onChange={handleTimeZoneChange} aria-label="Timezone">
										{timezoneChoices.map(choice => (
											<option key={choice.value} value={choice.value}>{choice.label}</option>
										))}
									</select>
								</label>
							) : (
								<span>Times shown in {timeZone}</span>
							)}
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default BookingModal;
