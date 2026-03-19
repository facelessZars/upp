 const staff = [
        {
            name: "Шаров Сергей Александрович",
            description: "Преподаватель ГАПОУ ТСПК",
            img: "img/Шаров.png" ,
            awards: [
                { title: "Должность:", desc: "Преподаватель спец. дисциплин на специальности Информационные системы и программирование" },
                { title: "Статус эксперта", desc: "Сертифицированный эксперт WSR (WorldSkills Russia) по компетенции «Веб-дизайн и разработка" }
            ]
        },
        {
            name: "Дьякова Елизавета Сергеевна",
            description: "Преподаватель ГАПОУ ТСПК",
            img: "img/дьякова.jpg" ,
            awards: [
                { title: "Должность:", desc: "Заведующая IT-отделением Преподаватель профессионального модуля на 1 курсе" },
                { title: "Статус эксперта", desc: "После выпуска работала на Кипре в крупной компании AltRP, Серебро в 2018 и 2019 годах на Всероссийском конкурсе и Бронза в направлении «Интернет вещей» " }
            ]
        },
        {
            name: "Кондурар Марина Викторовна",
            description: "Преподаватель ГАПОУ ТСПК",
            img: "img/Кондурар.jpg" ,
            awards: [
                { title: "Должность:", desc: "Преподаватель спец. дисциплин на отделении IT" },
                { title: "Статус эксперта", desc: "Эксперт WSR (WorldSkills Russia) по компетенции «Машинное обучение и большие данные. Кандидат педагогических наук" }
            ]
        },
        {
            name: "Романова Татьяна Николаевна",
            description: "Преподаватель ГАПОУ ТСПК",
            img: "img/Романова.jpg" ,
            awards: [
                { title: "Должность:", desc: "Преподаватель спец. дисциплин на отделении IT" },
                { title: "Статус эксперта", desc: "Эксперт WSR (WorldSkills Russia) по компетенции «Разработка виртуальной и дополненной реальности" }
            ]
        },
        {
            name: "Ряполова Елена Олеговна",
            description: "Преподаватель ГАПОУ ТСПК",
            img: "img/Ряполова.jpg" ,
            awards: [
                { title: "Квалификация:", desc: "Филолог, преподаватель, экономист, учитель иностранного языка начальной и основной общеобразовательной школы." },
                { title: "Должность:", desc: "Иностранный язык в профессиональной деятельности: 2 и 4 курсы, Иностранный язык: 2 и 3 курсы, Социально-значимая деятельность: 4 курс" },
            ]
        },
   
    ];

    let current = 0;
    const animBlock = document.getElementById('content-anim');
    const photoEl = document.getElementById('photo');

    function renderAwards(awards) {
    const container = document.getElementById('achievements');
        const thumbIcon = `
            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M21.3 10.08l-2.61-1.3a2.38 2.38 0 0 0-1.12-.28H14.1l.46-2.16a2.6 2.6 0 0 0-.58-2.28 2.36 2.36 0 0 0-1.78-.81h-.14a.43.43 0 0 0-.41.28L8.23 9.18H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12.8a3.15 3.15 0 0 0 2.9-1.92l2.61-6.52A3.08 3.08 0 0 0 21.3 10.08zM4 19.18V11.18h3v8H4zm15.42-7l-2.61 6.51A1.16 1.16 0 0 1 15.8 19.18H9V10.42l3.29-5.59a.37.37 0 0 1 .1-.05.36.36 0 0 1 .28.08.6.6 0 0 1 .13.51l-.7 3.26a1 1 0 0 0 1 1.21h4.48c.18 0 .34.03.46.09z"/>
            </svg>
        `;

        container.innerHTML = awards.map(a => `
            <div class="achieve-item">
                <div class="achieve-icon-wrapper">
                    ${thumbIcon}
                </div>
                <div class="achieve-title">${a.title}</div>
                <div class="achieve-desc">${a.desc}</div>
            </div>
        `).join('');
    }

    function update() {
        animBlock.classList.add('fade-out');
        photoEl.style.opacity = '0';

        setTimeout(() => {
            const p = staff[current];
            document.getElementById('name').innerText = p.name;
            document.getElementById('description').innerText = p.description;
            photoEl.src = p.img;
            document.getElementById('counter').innerText = `${String(current + 1).padStart(2, '0')} / 05`;
            renderAwards(p.awards);

            animBlock.classList.remove('fade-out');
            photoEl.style.opacity = '1';
        }, 400);
    }

    document.getElementById('nextBtn').onclick = () => { current = (current + 1) % staff.length; update(); };
    document.getElementById('prevBtn').onclick = () => { current = (current - 1 + staff.length) % staff.length; update(); };

    renderAwards(staff[0].awards);