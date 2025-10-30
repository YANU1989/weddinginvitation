(function () {
    const targetISO = typeof window !== 'undefined' && window.WEDDING_DATE_ISO
        ? window.WEDDING_DATE_ISO
        : '2025-12-20T09:00:00+07:00';

    const targetDate = new Date(targetISO);
    const el = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds'),
        note: document.getElementById('countdown-note')
    };

    function pad(num) {
        return String(num).padStart(2, '0');
    }

    function updateCountdown() {
        const now = new Date();
        const diffMs = targetDate.getTime() - now.getTime();

        if (diffMs <= 0) {
            el.days.textContent = '00';
            el.hours.textContent = '00';
            el.minutes.textContent = '00';
            el.seconds.textContent = '00';
            if (el.note) el.note.textContent = 'Hari bahagia telah tiba. Sampai jumpa di acara!';
            return;
        }

        const totalSeconds = Math.floor(diffMs / 1000);
        const days = Math.floor(totalSeconds / (3600 * 24));
        const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        el.days.textContent = pad(days);
        el.hours.textContent = pad(hours);
        el.minutes.textContent = pad(minutes);
        el.seconds.textContent = pad(seconds);
    }

    // Kickoff
    updateCountdown();
    setInterval(updateCountdown, 1000);
})();


