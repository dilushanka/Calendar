        document.addEventListener('DOMContentLoaded', function() {
            // Language state (si = Sinhala, en = English)
            let currentLang = 'si';
            
            // Calendar elements
            const calendarDays = document.getElementById('calendar-days');
            const currentMonthEl = document.getElementById('current-month');
            const prevMonthBtn = document.getElementById('prev-month');
            const nextMonthBtn = document.getElementById('next-month');
            const yearSelector = document.getElementById('year-selector');
            const monthSelector = document.getElementById('month-selector');
            const weekdaysEl = document.getElementById('weekdays');
            const langToggle = document.getElementById('lang-toggle');
            const langText = document.getElementById('lang-text');
            const logoText = document.getElementById('logo-text');
            const footerText = document.getElementById('footer-text');
            const todayText = document.getElementById('today-text');
            const holidayText = document.getElementById('holiday-text');
            
            // Current date
            let currentDate = new Date();
            let currentMonth = currentDate.getMonth();
            let currentYear = currentDate.getFullYear();
            
            // Set selected year
            yearSelector.value = currentYear;
            
            // Language-specific text
            const translations = {
                si: {
                    logo: "ශ්‍රී ලංකා නිවාඩු දින දර්ශනය",
                    toggle: "To English",
                    footer: "ශ්‍රී ලංකාවේ නිල නිවාඩු දින දර්ශනය",
                    today: "අද දිනය",
                    holiday: "නිවාඩු දිනය",
                    weekdays: ["ඉරි", "සඳු", "අඟ", "බදා", "බ්‍රහ", "සිකු", "සෙන"],
                    months: [
                        "ජනවාරි", "පෙබරවාරි", "මාර්තු", "අප්‍රේල්", "මැයි", "ජූනි", 
                        "ජූලි", "අගෝස්තු", "සැප්තැම්බර්", "ඔක්තෝබර්", "නොවැම්බර්", "දෙසැම්බර්"
                    ]
                },
                en: {
                    logo: "Sri Lanka Holiday Calendar",
                    toggle: "සිංහලට",
                    footer: "Official public holidays of Sri Lanka",
                    today: "Today",
                    holiday: "Holiday",
                    weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    months: [
                        "January", "February", "March", "April", "May", "June", 
                        "July", "August", "September", "October", "November", "December"
                    ]
                }
            };
            
            // Initialize the calendar
            function initCalendar() {
                createMonthSelector();
                createWeekdays();
                generateCalendar(currentMonth, currentYear);
                updateLanguageUI();
            }
            
            // Create month selector buttons
            function createMonthSelector() {
                monthSelector.innerHTML = '';
                const months = translations[currentLang].months;
                
                months.forEach((month, index) => {
                    const button = document.createElement('button');
                    button.classList.add('month-btn');
                    if (index === currentMonth) button.classList.add('active');
                    button.dataset.month = index;
                    button.textContent = month;
                    
                    button.addEventListener('click', () => {
                        currentMonth = index;
                        generateCalendar(currentMonth, currentYear);
                    });
                    
                    monthSelector.appendChild(button);
                });
            }
            
            // Create weekday headers
            function createWeekdays() {
                weekdaysEl.innerHTML = '';
                const weekdays = translations[currentLang].weekdays;
                
                weekdays.forEach(day => {
                    const div = document.createElement('div');
                    div.textContent = day;
                    weekdaysEl.appendChild(div);
                });
            }
            
            // Generate calendar
            function generateCalendar(month, year) {
                // Clear calendar
                calendarDays.innerHTML = '';
                
                // Update month header
                const months = translations[currentLang].months;
                currentMonthEl.textContent = `${months[month]} ${year}`;
                
                // Get first day of month
                const firstDay = new Date(year, month, 1);
                // Get last day of month
                const lastDay = new Date(year, month + 1, 0);
                // Get last day of previous month
                const prevLastDay = new Date(year, month, 0).getDate();
                // Get day of week for first day
                const firstDayIndex = firstDay.getDay();
                // Get today's date
                const today = new Date();
                
                // Previous month days
                for (let i = firstDayIndex; i > 0; i--) {
                    const day = document.createElement('div');
                    day.classList.add('day', 'prev-month');
                    const dayNumber = document.createElement('div');
                    dayNumber.classList.add('day-number');
                    dayNumber.textContent = prevLastDay - i + 1;
                    day.appendChild(dayNumber);
                    calendarDays.appendChild(day);
                }
                
                // Current month days
                for (let i = 1; i <= lastDay.getDate(); i++) {
                    const day = document.createElement('div');
                    day.classList.add('day');
                    
                    // Check if today
                    const thisDate = new Date(year, month, i);
                    if (thisDate.toDateString() === today.toDateString()) {
                        day.classList.add('today');
                    }
                    
                    // Add day number
                    const dayNumber = document.createElement('div');
                    dayNumber.classList.add('day-number');
                    dayNumber.textContent = i;
                    day.appendChild(dayNumber);
                    
                    // Check for holidays
                    const yearStr = year.toString();
                    if (holidaysData[yearStr] && holidaysData[yearStr][month]) {
                        const holidayForDay = holidaysData[yearStr][month].find(h => h.day === i);
                        if (holidayForDay) {
                            day.classList.add('holiday');
                            const event = document.createElement('div');
                            event.classList.add('event');
                            event.textContent = holidayForDay.name[currentLang];
                            day.appendChild(event);
                        }
                    }
                    
                    calendarDays.appendChild(day);
                }
                
                // Next month days
                const daysNeeded = 42 - (firstDayIndex + lastDay.getDate());
                for (let i = 1; i <= daysNeeded; i++) {
                    const day = document.createElement('div');
                    day.classList.add('day', 'next-month');
                    const dayNumber = document.createElement('div');
                    dayNumber.classList.add('day-number');
                    dayNumber.textContent = i;
                    day.appendChild(dayNumber);
                    calendarDays.appendChild(day);
                }
                
                // Update active month button
                document.querySelectorAll('.month-btn').forEach((btn, index) => {
                    if (index === month) {
                        btn.classList.add('active');
                    } else {
                        btn.classList.remove('active');
                    }
                });
            }
            
            // Update all UI elements when language changes
            function updateLanguageUI() {
                const langData = translations[currentLang];
                
                // Update text elements
                logoText.textContent = langData.logo;
                langText.textContent = langData.toggle;
                todayText.textContent = langData.today;
                holidayText.textContent = langData.holiday;
                footerText.textContent = langData.footer;
                
                // Recreate dynamic elements
                createMonthSelector();
                createWeekdays();
                generateCalendar(currentMonth, currentYear);
                
                // Add animation effect
                document.body.classList.add('language-change');
                setTimeout(() => {
                    document.body.classList.remove('language-change');
                }, 300);
            }
            
            // Language toggle
            langToggle.addEventListener('click', function() {
                currentLang = currentLang === 'si' ? 'en' : 'si';
                updateLanguageUI();
            });
            
            // Navigation
            prevMonthBtn.addEventListener('click', () => {
                currentMonth--;
                if (currentMonth < 0) {
                    currentMonth = 11;
                    currentYear--;
                    yearSelector.value = currentYear;
                }
                generateCalendar(currentMonth, currentYear);
            });
            
            nextMonthBtn.addEventListener('click', () => {
                currentMonth++;
                if (currentMonth > 11) {
                    currentMonth = 0;
                    currentYear++;
                    yearSelector.value = currentYear;
                }
                generateCalendar(currentMonth, currentYear);
            });
            
            // Year selector
            yearSelector.addEventListener('change', () => {
                currentYear = parseInt(yearSelector.value);
                generateCalendar(currentMonth, currentYear);
            });
            
            // Initialize the calendar
            initCalendar();
        });