'use client'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import './BookingSection.css';

const SLOT_RANGE_DAYS = 14;

function BookingSection() {
	const [timeZone, setTimeZone] = useState(null);
	const [slotsByDay, setSlotsByDay] = useState({});
	const [loading, setLoading] = useState(true);
	const [loadError, setLoadError] = useState(null);
	const [selectedDay, setSelectedDay] = useState(null);
	const [selectedSlot, setSelectedSlot] = useState(null);
	const [form, setForm] = useState({ name: '', email: '', phone: '' });
	const [submitting, setSubmitting] = useState(false);
	const [bookingError, setBookingError] = useState(null);
	const [booking, setBooking] = useState(null);
	const successRef = useRef(null);

	useEffect(() => {
		if (booking && successRef.current) {
			successRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
		}
	}, [booking]);

	useEffect(() => {
		setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC');
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
		if (timeZone) fetchSlots(timeZone);
	}, [timeZone, fetchSlots]);

	const days = useMemo(
		() => Object.keys(slotsByDay).filter(day => slotsByDay[day]?.length).sort(),
		[slotsByDay]
	);

	useEffect(() => {
		setSelectedDay(prev => (days.length && days.includes(prev) ? prev : days[0] || null));
	}, [days]);

	function selectDay(day) {
		setSelectedDay(day);
		setSelectedSlot(null);
		setBookingError(null);
	}

	function selectSlot(slot) {
		setSelectedSlot(slot);
		setBookingError(null);
	}

	function resetFlow() {
		setBooking(null);
		setSelectedSlot(null);
		setForm({ name: '', email: '', phone: '' });
	}

	function handleFieldChange(field, value) {
		setForm(prev => ({ ...prev, [field]: value }));
	}

	async function handleSubmit(event) {
		event.preventDefault();
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
		return new Date(slot).toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
	}

	function formatSlotSummary(slot) {
		return new Date(slot).toLocaleString([], {
			weekday: 'long',
			month: 'long',
			day: 'numeric',
			hour: 'numeric',
			minute: '2-digit'
		});
	}

	function formatBookedRange(start, end) {
		const startDate = new Date(start);
		const dateLine = startDate.toLocaleDateString([], {
			weekday: 'long',
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
		const startLine = startDate.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
		const endDate = new Date(end || '');
		if (!Number.isNaN(endDate.getTime())) {
			const endLine = endDate.toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });
			return `${dateLine}, ${startLine} — ${endLine}`;
		}
		return `${dateLine}, ${startLine}`;
	}

	if (booking) {
		return (
			<section className="booking-section" id="book-appointment">
				<div className="booking-container">
					<div className="booking-card booking-success" ref={successRef}>
						<div className="booking-success-icon">
							<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
								<polyline points="20 6 9 17 4 12" />
							</svg>
						</div>
						<p className="booking-success-heading">Appointment <span className="italic-serif">Confirmed</span></p>
						<p className="booking-success-details">{formatBookedRange(booking.start, booking.end)}</p>
						{typeof booking.location === 'string' && booking.location.startsWith('http') && (
							<a
								href={booking.location}
								target="_blank"
								rel="noopener noreferrer"
								className="booking-success-link"
							>
								Your Meeting Link
							</a>
						)}
						<p className="booking-success-note">A confirmation email with all the details is on its way.</p>
						<button type="button" className="booking-reset" onClick={resetFlow}>
							Book Another Appointment
						</button>
					</div>
				</div>
			</section>
		);
	}

	const slotTimes = selectedDay
		? (slotsByDay[selectedDay] || []).map(slot => slot.start)
		: [];

	return (
		<section className="booking-section" id="book-appointment">
			<div className="booking-container">
				<div className="booking-header">
					<span className="booking-label">Consultations</span>
					<h2 className="booking-title">
						Book an <span className="italic-serif">Appointment</span>
					</h2>
					<p className="booking-intro">
						Choose a convenient time and connect with our team for a personalised discussion
						about your intellectual property needs.
					</p>
				</div>

				<div className="booking-card">
					{loadError && (
						<div className="booking-alert">
							<span>{loadError}</span>
							<button type="button" onClick={() => fetchSlots(timeZone)}>Retry</button>
						</div>
					)}

					{loading && timeZone && (
						<div className="booking-loading">
							<div className="booking-day-strip">
								{[0, 1, 2, 3, 4].map(i => <span key={i} className="booking-chip-skeleton" />)}
							</div>
							<div className="booking-slot-grid">
								{[0, 1, 2, 3, 4, 5].map(i => <span key={i} className="booking-slot-skeleton" />)}
							</div>
						</div>
					)}

					{!loading && !loadError && (days.length ? (
						<>
							<div className="booking-step-label">1 · Choose a Date</div>
							<div className="booking-day-strip booking-scroll">
								{days.map(day => {
									const f = formatDate(day);
									return (
										<button
											key={day}
											type="button"
											className={selectedDay === day ? 'booking-day active' : 'booking-day'}
											onClick={() => selectDay(day)}
										>
											<span className="booking-day-week">{f.weekday}</span>
											<span className="booking-day-num">{f.day}</span>
											<span className="booking-day-month">{f.month}</span>
										</button>
									);
								})}
							</div>

							{slotTimes.length ? (
								<>
									<div className="booking-step-label">2 · Choose a Time</div>
									<div className="booking-slot-grid">
										{slotTimes.map(slot => (
											<button
												key={slot}
												type="button"
												className={selectedSlot === slot ? 'booking-slot active' : 'booking-slot'}
												onClick={() => selectSlot(slot)}
											>
												{formatSlot(slot)}
											</button>
										))}
									</div>
								</>
							) : (
								<p className="booking-empty">No times left on this date. Please pick another day.</p>
							)}

							{selectedSlot && (
								<form className="booking-form" onSubmit={handleSubmit}>
									<div className="booking-step-label">3 · Your Details</div>
									<p className="booking-summary">{formatSlotSummary(selectedSlot)}</p>
									<div className="booking-fields">
										<div className="booking-field">
											<label htmlFor="booking-name">Full Name</label>
											<input
												id="booking-name"
												type="text"
												required
												maxLength={120}
												value={form.name}
												onChange={e => handleFieldChange('name', e.target.value)}
											/>
										</div>
										<div className="booking-field">
											<label htmlFor="booking-email">Email</label>
											<input
												id="booking-email"
												type="email"
												required
												maxLength={254}
												value={form.email}
												onChange={e => handleFieldChange('email', e.target.value)}
											/>
										</div>
										<div className="booking-field booking-field-full">
											<label htmlFor="booking-phone">Phone (optional)</label>
											<input
												id="booking-phone"
												type="tel"
												maxLength={20}
												value={form.phone}
												onChange={e => handleFieldChange('phone', e.target.value)}
											/>
										</div>
									</div>
									<button type="submit" className="booking-submit" disabled={submitting}>
										{submitting ? 'Booking…' : 'Confirm Booking'}
									</button>
									{bookingError && <p className="booking-form-error">{bookingError}</p>}
								</form>
							)}
						</>
					) : (
						<p className="booking-empty">
							No times available in the next {SLOT_RANGE_DAYS} days. Please check back soon or
							email inbox@lexvuip.com.
						</p>
					))}
				</div>

				{timeZone && !booking && (
					<p className="booking-timezone">Times shown in your timezone — {timeZone}</p>
				)}
			</div>
		</section>
	);
}

export default BookingSection;
