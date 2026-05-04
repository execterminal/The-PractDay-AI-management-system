# The-PractDay-AI-management-system
The realization of the technical task.

Translated task:

Terms of reference for the development of an information system for managing educational and industrial practice using artificial intelligence
1. The name of the system
Information management system of educational and industrial practice with elements of artificial intelligence (PractDay AI) for the college of Pavlodar region of the Republic of Kazakhstan.
2. The purpose of the development
Creation of a web-based information system for automating the processes of organizing, monitoring and documenting the educational and industrial practice of college students. The system is designed for interaction between the administration, students and social partners (employers, enterprises). Main objectives:
    • Simplify registration, authorization, and selection of practice locations.
    • Automation of accounting for students' presence at practice sites (in-person/offline and in absentia/online).
    • Ensuring that records are filled in, confirmed, and stored in electronic practice diaries in accordance with work training programs (RUP).
    • The use of artificial intelligence to analyze feedback from social partners and build student characteristics according to preset patterns.
    • Improving the transparency, efficiency and quality of internship control.
3. Description of the system
The system is designed for colleges in the Pavlodar region that implement vocational education programs. It covers the processes of educational and industrial practice in various disciplines (technical, economic, humanitarian, etc.). The system integrates with existing college databases and meets the requirements of the Ministry of Education and Science of the Republic of Kazakhstan, including legislation on personal data.
4. User Roles
The system supports the following roles with access rights delimited:
    • Administrator (college administration): User management, assignment and approval of practice locations, monitoring progress, generating reports, approving diaries and characteristics.
    • Student: Registration for an internship, choosing a place of practice, marking attendance (in person/in absentia), filling out a diary, reviewing assignments and characteristics.
    • Social partner (head of practice from the company): Confirmation of the students' presence, assessment and confirmation of diary entries, providing feedback, participating in the formation of characteristics.
    • Guest (unauthorized user): View general information about the system (without access to personal data).
4. Functional requirements
4.1. Registration and authorization
    • Registration:
◦ Form: Full name, email, phone, role, group/specialty (for students), organization (for partners).
         Confirmation: Via email or SMS.
         Data import: For students — from the college database (Excel/CSV or API); for partners — invitations from the administration.
    • Authorization: Login/password, two-factor authentication for administrators (optional).
    • Password recovery: Via email with a one-time link.
    • Roles: Role-based Access Control (RBAC).
4.2. Choosing a practice location
    • Directory of practice locations: A list of partner companies with filters (city, discipline, full-time/part-time).
    • Student's choice: The student chooses an internship location from the suggested list or applies for a new location (with subsequent approval by the administrator).
    • Approval: The administrator confirms the selection, appoints a supervisor from the college and a partner.
    • Integration: The ability to add new partners by the administrator (with data: name, address, contact person).
4.3. Accounting for on-site practice
    • Face-to-face (offline):
Geolocation: Students mark their presence through a mobile app/web interface using GPS. Verification of compliance with the place of practice (radius 100-500 m).
         Log: Arrival/departure time, confirmation by the partner.
    • In absentia (online):
◦ Confirmation of activity: Uploading completed assignments, participating in video conferences, or registering in the system (for example, by completing tests).
         Log: Logging of activity (entry/exit time, amount of work performed).
    • Notifications: Automatic notifications about omissions or inconsistencies (SMS/email for students, administrators).
    • Reports: Generate presence summaries (Excel/PDF) for the period.
4.4. Filling out and confirming entries in the practice diary
    • Electronic diary:
◦ Templates: Based on the RUP in the disciplines (for example, "Programming", "Welding"). Fields: date, job description, skills, comments.
        ◦ Filling out: Students make entries daily/weekly.
         Confirmation: The partner confirms/edits the entries; the administrator approves them finally.
    • Compliance with the RUP: Automatic verification of the completeness of records (for example, the minimum number of hours, coverage of all competencies).
    • Storage: Export diaries to PDF with EDS support.
    • Logging: The history of all changes in the records.
4.5. Application of artificial intelligence
• Analysis of feedback from social partners: 
         Collection: Partners leave text reviews about students (for example, "responsible, learning fast").
         Processing: AI (NLP module, for example, BERT or spaCy) analyzes reviews, determining the tone (positive/negative) and key aspects (skills, discipline, initiative).
         Conclusion: Generation of a report with an assessment (for example, "85% positive reviews") and recommendations for students/administration.
    • Building a characteristic: 
         Template: Preset templates of characteristics (for example, "Assessment of professional skills", "Personal qualities").
         Generation: The AI generates a characteristic based on reviews, diary entries, and presence data.
        ◦ Example: "Student Ivanov I.I. showed a high level of mastery of welding skills, received 90% positive feedback from a partner, and demonstrated punctuality."
        ◦ Edit: The administrator can adjust the characteristic before approval.
        , Export: Characteristics to PDF with EDS support.
4.6. Additional functions
• Assignment of practices: Creation of practices by the administrator (location, dates, disciplines, partners).
    • Reports and analytics: Generation of reports (Excel/PDF) on progress, academic performance, statistics (for example, % completion of practice by groups).
    • Feedback: Built-in chat or forms for communication between roles.
    • Search and filters: By students, practitioners, disciplines, partners.Terms of reference for the development of an information system for managing educational and industrial practice using artificial intelligence
1. The name of the system
Information management system of educational and industrial practice with elements of artificial intelligence (PractDay AI) for the college of Pavlodar region of the Republic of Kazakhstan.
2. The purpose of the development
Creation of a web-based information system for automating the processes of organizing, monitoring and documenting the educational and industrial practice of college students. The system is designed for interaction between the administration, students and social partners (employers, enterprises). Main objectives:
    • Simplify registration, authorization, and selection of practice locations.
    • Automation of accounting for students' presence at practice sites (in-person/offline and in absentia/online).
    • Ensuring that records are filled in, confirmed, and stored in electronic practice diaries in accordance with work training programs (RUP).
    • The use of artificial intelligence to analyze feedback from social partners and build student characteristics according to preset patterns.
    • Improving the transparency, efficiency and quality of internship control.
3. Description of the system
The system is designed for colleges in the Pavlodar region that implement vocational education programs. It covers the processes of educational and industrial practice in various disciplines (technical, economic, humanitarian, etc.). The system integrates with existing college databases and meets the requirements of the Ministry of Education and Science of the Republic of Kazakhstan, including legislation on personal data.
4. User Roles
The system supports the following roles with access rights delimited:
    • Administrator (college administration): User management, assignment and approval of practice locations, monitoring progress, generating reports, approving diaries and characteristics.
    • Student: Registration for an internship, choosing a place of practice, marking attendance (in person/in absentia), filling out a diary, reviewing assignments and characteristics.
    • Social partner (head of practice from the company): Confirmation of the students' presence, assessment and confirmation of diary entries, providing feedback, participating in the formation of characteristics.
    • Guest (unauthorized user): View general information about the system (without access to personal data).
4. Functional requirements
4.1. Registration and authorization
    • Registration:
◦ Form: Full name, email, phone, role, group/specialty (for students), organization (for partners).
         Confirmation: Via email or SMS.
         Data import: For students — from the college database (Excel/CSV or API); for partners — invitations from the administration.
    • Authorization: Login/password, two-factor authentication for administrators (optional).
    • Password recovery: Via email with a one-time link.
    • Roles: Role-based Access Control (RBAC).
4.2. Choosing a practice location
    • Directory of practice locations: A list of partner companies with filters (city, discipline, full-time/part-time).
    • Student's choice: The student chooses an internship location from the suggested list or applies for a new location (with subsequent approval by the administrator).
    • Approval: The administrator confirms the selection, appoints a supervisor from the college and a partner.
    • Integration: The ability to add new partners by the administrator (with data: name, address, contact person).
4.3. Accounting for on-site practice
    • Face-to-face (offline): 


Original one:

Техническое задание на разработку информационной системы для управления учебно-производственной практикой с применением искусственного интеллекта
1. Название системы
Информационная система управления учебно-производственной практикой с элементами искусственного интеллекта (PractDay AI) для колледжа Павлодарской области Республики Казахстан.
2. Цель разработки
Создание веб-ориентированной информационной системы для автоматизации процессов организации, контроля и документирования учебно-производственной практики студентов колледжа. Система предназначена для взаимодействия администрации, студентов и социальных партнёров (работодателей, предприятий). Основные цели:
    • Упрощение регистрации, авторизации и выбора мест практики.
    • Автоматизация учёта присутствия студентов на местах практики (очно/офлайн и заочно/онлайн).
    • Обеспечение заполнения, подтверждения и хранения записей в электронных дневниках практики в соответствии с рабочими учебными программами (РУП).
    • Применение искусственного интеллекта для анализа отзывов социальных партнёров и построения характеристик студентов по заданным шаблонам.
    • Повышение прозрачности, эффективности и качества контроля за прохождением практики.
3. Описание системы
Система предназначена для колледжей Павлодарской области, реализующих программы профессионального образования. Она охватывает процессы учебно-производственной практики по различным дисциплинам (технические, экономические, гуманитарные и др.). Система интегрируется с существующими базами данных колледжа и соответствует требованиям Министерства образования и науки Республики Казахстан, включая законодательство о персональных данных.
4. Роли пользователей
Система поддерживает следующие роли с разграничением прав доступа:
    • Администратор (администрация колледжа): Управление пользователями, назначение и утверждение мест практики, мониторинг прогресса, генерация отчётов, утверждение дневников и характеристик.
    • Студент: Регистрация на практику, выбор места практики, отметка присутствия (очно/заочно), заполнение дневника, просмотр заданий и характеристик.
    • Социальный партнёр (руководитель практики от предприятия): Подтверждение присутствия студентов, оценка и подтверждение записей в дневнике, предоставление отзывов, участие в формировании характеристик.
    • Гость (неавторизованный пользователь): Просмотр общей информации о системе (без доступа к личным данным).
4. Функциональные требования
4.1. Регистрация и авторизация
    • Регистрация: 
        ◦ Форма: ФИО, email, телефон, роль, группа/специальность (для студентов), организация (для партнёров).
        ◦ Подтверждение: Через email или SMS.
        ◦ Импорт данных: Для студентов — из базы колледжа (Excel/CSV или API); для партнёров — приглашения от администрации.
    • Авторизация: Логин/пароль, двухфакторная аутентификация для администраторов (опционально).
    • Восстановление пароля: Через email с одноразовой ссылкой.
    • Роли: Разграничение доступа на основе ролей (RBAC).
4.2. Выбор места практики
    • Каталог мест практики: Список предприятий-партнёров с фильтрами (город, дисциплина, очно/заочно).
    • Выбор студентом: Студент выбирает место практики из предложенного списка или подаёт заявку на новое место (с последующим утверждением администратором).
    • Утверждение: Администратор подтверждает выбор, назначает куратора от колледжа и партнёра.
    • Интеграция: Возможность добавления новых партнёров администратором (с данными: название, адрес, контактное лицо).
4.3. Учёт нахождения на местах практики
    • Очно (офлайн): 
        ◦ Геолокация: Студенты отмечают присутствие через мобильное приложение/веб-интерфейс с использованием GPS. Проверка соответствия месту практики (радиус 100-500 м).
        ◦ Журнал: Время прибытия/ухода, подтверждение партнёром.
    • Заочно (онлайн): 
        ◦ Подтверждение активности: Загрузка выполненных заданий, участие в видеоконференциях или отметка в системе (например, через выполнение тестов).
        ◦ Журнал: Логирование активности (время входа/выхода, объём выполненной работы).
    • Уведомления: Автоматические оповещения о пропусках или несоответствиях (SMS/email для студентов, администраторов).
    • Отчёты: Генерация сводок по присутствию (Excel/PDF) за период.
4.4. Заполнение и подтверждение записей в дневнике практики
    • Электронный дневник: 
        ◦ Шаблоны: На основе РУП по дисциплинам (например, "Программирование", "Сварочные работы"). Поля: дата, описание работ, навыки, замечания.
        ◦ Заполнение: Студенты вносят записи ежедневно/еженедельно.
        ◦ Подтверждение: Партнёр подтверждает/редактирует записи; администратор утверждает финально.
    • Соответствие РУП: Автоматическая проверка полноты записей (например, минимальное количество часов, покрытие всех компетенций).
    • Хранение: Экспорт дневников в PDF с поддержкой ЭЦП.
    • Логирование: История всех изменений в записях.
4.5. Применение искусственного интеллекта
    • Анализ отзывов социальных партнёров: 
        ◦ Сбор: Партнёры оставляют текстовые отзывы о студентах (например, "ответственный, быстро обучается").
        ◦ Обработка: ИИ (NLP-модуль, например, BERT или spaCy) анализирует отзывы, определяя тональность (позитивная/негативная) и ключевые аспекты (навыки, дисциплина, инициативность).
        ◦ Вывод: Генерация отчёта с оценкой (например, "85% позитивных отзывов") и рекомендациями для студентов/администрации.
    • Построение характеристики: 
        ◦ Шаблон: Заданные шаблоны характеристик (например, "Оценка профессиональных навыков", "Личностные качества").
        ◦ Генерация: ИИ формирует характеристику на основе отзывов, записей дневника и данных о присутствии.
        ◦ Пример: "Студент Иванов И.И. показал высокий уровень освоения навыков сварки, получил 90% позитивных отзывов от партнёра, демонстрировал пунктуальность".
        ◦ Редактирование: Администратор может корректировать характеристику перед утверждением.
        ◦ Экспорт: Характеристика в PDF с поддержкой ЭЦП.
4.6. Дополнительные функции
    • Назначение практик: Создание администратором практик (место, сроки, дисциплины, партнёры).
    • Отчёты и аналитика: Генерация отчётов (Excel/PDF) по прогрессу, успеваемости, статистике (например, % завершения практики по группам).
    • Обратная связь: Встроенный чат или формы для общения между ролями.
    • Поиск и фильтры: По студентам, практикам, дисциплинам, партнёрам.Техническое задание на разработку информационной системы для управления учебно-производственной практикой с применением искусственного интеллекта
1. Название системы
Информационная система управления учебно-производственной практикой с элементами искусственного интеллекта (PractDay AI) для колледжа Павлодарской области Республики Казахстан.
2. Цель разработки
Создание веб-ориентированной информационной системы для автоматизации процессов организации, контроля и документирования учебно-производственной практики студентов колледжа. Система предназначена для взаимодействия администрации, студентов и социальных партнёров (работодателей, предприятий). Основные цели:
    • Упрощение регистрации, авторизации и выбора мест практики.
    • Автоматизация учёта присутствия студентов на местах практики (очно/офлайн и заочно/онлайн).
    • Обеспечение заполнения, подтверждения и хранения записей в электронных дневниках практики в соответствии с рабочими учебными программами (РУП).
    • Применение искусственного интеллекта для анализа отзывов социальных партнёров и построения характеристик студентов по заданным шаблонам.
    • Повышение прозрачности, эффективности и качества контроля за прохождением практики.
3. Описание системы
Система предназначена для колледжей Павлодарской области, реализующих программы профессионального образования. Она охватывает процессы учебно-производственной практики по различным дисциплинам (технические, экономические, гуманитарные и др.). Система интегрируется с существующими базами данных колледжа и соответствует требованиям Министерства образования и науки Республики Казахстан, включая законодательство о персональных данных.
4. Роли пользователей
Система поддерживает следующие роли с разграничением прав доступа:
    • Администратор (администрация колледжа): Управление пользователями, назначение и утверждение мест практики, мониторинг прогресса, генерация отчётов, утверждение дневников и характеристик.
    • Студент: Регистрация на практику, выбор места практики, отметка присутствия (очно/заочно), заполнение дневника, просмотр заданий и характеристик.
    • Социальный партнёр (руководитель практики от предприятия): Подтверждение присутствия студентов, оценка и подтверждение записей в дневнике, предоставление отзывов, участие в формировании характеристик.
    • Гость (неавторизованный пользователь): Просмотр общей информации о системе (без доступа к личным данным).
4. Функциональные требования
4.1. Регистрация и авторизация
    • Регистрация: 
        ◦ Форма: ФИО, email, телефон, роль, группа/специальность (для студентов), организация (для партнёров).
        ◦ Подтверждение: Через email или SMS.
        ◦ Импорт данных: Для студентов — из базы колледжа (Excel/CSV или API); для партнёров — приглашения от администрации.
    • Авторизация: Логин/пароль, двухфакторная аутентификация для администраторов (опционально).
    • Восстановление пароля: Через email с одноразовой ссылкой.
    • Роли: Разграничение доступа на основе ролей (RBAC).
4.2. Выбор места практики
    • Каталог мест практики: Список предприятий-партнёров с фильтрами (город, дисциплина, очно/заочно).
    • Выбор студентом: Студент выбирает место практики из предложенного списка или подаёт заявку на новое место (с последующим утверждением администратором).
    • Утверждение: Администратор подтверждает выбор, назначает куратора от колледжа и партнёра.
    • Интеграция: Возможность добавления новых партнёров администратором (с данными: название, адрес, контактное лицо).
4.3. Учёт нахождения на местах практики
    • Очно (офлайн): 
        ◦ Геолокация: Студенты отмечают присутствие через мобильное приложение/веб-интерфейс с использованием GPS. Проверка соответствия месту практики (радиус 100-500 м).
        ◦ Журнал: Время прибытия/ухода, подтверждение партнёром.
    • Заочно (онлайн): 
        ◦ Подтверждение активности: Загрузка выполненных заданий, участие в видеоконференциях или отметка в системе (например, через выполнение тестов).
        ◦ Журнал: Логирование активности (время входа/выхода, объём выполненной работы).
    • Уведомления: Автоматические оповещения о пропусках или несоответствиях (SMS/email для студентов, администраторов).
    • Отчёты: Генерация сводок по присутствию (Excel/PDF) за период.
4.4. Заполнение и подтверждение записей в дневнике практики
    • Электронный дневник: 
        ◦ Шаблоны: На основе РУП по дисциплинам (например, "Программирование", "Сварочные работы"). Поля: дата, описание работ, навыки, замечания.
        ◦ Заполнение: Студенты вносят записи ежедневно/еженедельно.
        ◦ Подтверждение: Партнёр подтверждает/редактирует записи; администратор утверждает финально.
    • Соответствие РУП: Автоматическая проверка полноты записей (например, минимальное количество часов, покрытие всех компетенций).
    • Хранение: Экспорт дневников в PDF с поддержкой ЭЦП.
    • Логирование: История всех изменений в записях.
4.5. Применение искусственного интеллекта
    • Анализ отзывов социальных партнёров: 
        ◦ Сбор: Партнёры оставляют текстовые отзывы о студентах (например, "ответственный, быстро обучается").
        ◦ Обработка: ИИ (NLP-модуль, например, BERT или spaCy) анализирует отзывы, определяя тональность (позитивная/негативная) и ключевые аспекты (навыки, дисциплина, инициативность).
        ◦ Вывод: Генерация отчёта с оценкой (например, "85% позитивных отзывов") и рекомендациями для студентов/администрации.
    • Построение характеристики: 
        ◦ Шаблон: Заданные шаблоны характеристик (например, "Оценка профессиональных навыков", "Личностные качества").
        ◦ Генерация: ИИ формирует характеристику на основе отзывов, записей дневника и данных о присутствии.
        ◦ Пример: "Студент Иванов И.И. показал высокий уровень освоения навыков сварки, получил 90% позитивных отзывов от партнёра, демонстрировал пунктуальность".
        ◦ Редактирование: Администратор может корректировать характеристику перед утверждением.
        ◦ Экспорт: Характеристика в PDF с поддержкой ЭЦП.
4.6. Дополнительные функции
    • Назначение практик: Создание администратором практик (место, сроки, дисциплины, партнёры).
    • Отчёты и аналитика: Генерация отчётов (Excel/PDF) по прогрессу, успеваемости, статистике (например, % завершения практики по группам).
    • Обратная связь: Встроенный чат или формы для общения между ролями.
    • Поиск и фильтры: По студентам, практикам, дисциплинам, партнёрам.
    • Многоязычность: Интерфейс на казахском и русском языках.
    • Уведомления: Оповещения о дедлайнах, подтверждении записей или характеристик
    • Многоязычность: Интерфейс на казахском и русском языках.
    • Уведомления: Оповещения о дедлайнах, подтверждении записей или характеристик
