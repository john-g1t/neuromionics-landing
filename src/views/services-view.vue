<template>
  <div class="services-view">
    <section class="hero-section">
      <div class="container">
        <h1 class="hero-title">
          Наши услуги
        </h1>
        <p class="hero-subtitle">
          Полный цикл разработки от концепции до внедрения и поддержки
        </p>
      </div>
    </section>

    <section class="main-services-section">
      <div class="container">
        <h2 class="section-title">
          Основные направления
        </h2>

        <div class="services-grid">
          <div class="service-card primary">
            <div class="service-header">
              <div class="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
              <h3>Разработка аппаратно-программных комплексов</h3>
            </div>
            <p class="service-description">
              Создание интегрированных решений для медицинской диагностики и реабилитации,
              включающих аппаратную часть (датчики, устройства обработки) и программное
              обеспечение (алгоритмы, интерфейсы, системы хранения).
            </p>
            <div class="service-includes">
              <h4>Что включает:</h4>
              <ul>
                <li>Проектирование электронных устройств регистрации биосигналов</li>
                <li>Разработка встраиваемого ПО для одноплатных компьютеров</li>
                <li>Создание алгоритмов цифровой обработки сигналов</li>
                <li>Интеграция с медицинским оборудованием</li>
                <li>Разработка пользовательских интерфейсов</li>
                <li>Техническая документация и спецификации</li>
              </ul>
            </div>
            <div class="service-tech">
              <strong>Технологии:</strong> Python, C/C++, ARM, Raspberry Pi, АЦП, NumPy, SciPy
            </div>
          </div>

          <div class="service-card primary">
            <div class="service-header">
              <div class="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                  />
                </svg>
              </div>
              <h3>AR/VR разработка для медицины</h3>
            </div>
            <p class="service-description">
              Проектирование и реализация приложений дополненной и виртуальной реальности
              для визуализации медицинских данных, обучения медперсонала и реабилитации
              пациентов.
            </p>
            <div class="service-includes">
              <h4>Что включает:</h4>
              <ul>
                <li>Разработка AR-приложений для визуализации физиологических данных</li>
                <li>VR-симуляторы для обучения медицинским процедурам</li>
                <li>Геймифицированные реабилитационные среды</li>
                <li>Интерактивная 3D-визуализация анатомических структур</li>
                <li>Адаптация под различные AR/VR-платформы</li>
                <li>Оптимизация производительности и UX</li>
              </ul>
            </div>
            <div class="service-tech">
              <strong>Технологии:</strong> Unity3D, C#, OpenXR, Vuforia, ARKit, ARCore, Oculus SDK
            </div>
          </div>

          <div class="service-card primary">
            <div class="service-header">
              <div class="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h3>Системы машинного обучения</h3>
            </div>
            <p class="service-description">
              Разработка и внедрение решений на основе искусственного интеллекта для
              автоматизации медицинской диагностики, прогнозирования и персонализации
              терапии.
            </p>
            <div class="service-includes">
              <h4>Что включает:</h4>
              <ul>
                <li>Классификация биомедицинских сигналов (ЭМГ, ЭЭГ, ЭКГ)</li>
                <li>Распознавание паттернов мышечной активности</li>
                <li>Предсказательные модели прогресса реабилитации</li>
                <li>Адаптивные алгоритмы персонализации тренировок</li>
                <li>Обучение моделей на медицинских датасетах</li>
                <li>Оптимизация для работы на встраиваемых системах</li>
              </ul>
            </div>
            <div class="service-tech">
              <strong>Технологии:</strong> TensorFlow, PyTorch, scikit-learn, Keras, OpenCV
            </div>
          </div>

          <div class="service-card primary">
            <div class="service-header">
              <div class="service-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3>Веб-платформы и облачные сервисы</h3>
            </div>
            <p class="service-description">
              Создание масштабируемых веб-приложений для удалённого мониторинга пациентов,
              телереабилитации и управления медицинскими данными с обеспечением безопасности
              и соответствия стандартам.
            </p>
            <div class="service-includes">
              <h4>Что включает:</h4>
              <ul>
                <li>SaaS-платформы для медицинских учреждений</li>
                <li>Личные кабинеты пациентов и врачей</li>
                <li>Системы аналитики и визуализации данных</li>
                <li>API для интеграции с медицинским оборудованием</li>
                <li>Облачное хранилище с шифрованием данных</li>
                <li>Мобильные приложения (iOS, Android)</li>
              </ul>
            </div>
            <div class="service-tech">
              <strong>Технологии:</strong> Vue.js, React, Node.js, Python, PostgreSQL, MongoDB, AWS
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="additional-services-section">
      <div class="container">
        <h2 class="section-title">
          Дополнительные услуги
        </h2>

        <div class="additional-grid">
          <div class="additional-card">
            <div class="additional-number">
              01
            </div>
            <h3>Инжиниринг и внедрение</h3>
            <p>
              Установка оборудования в медицинских центрах, настройка программного
              обеспечения, интеграция с существующей инфраструктурой. Полное
              сопровождение процесса внедрения от разработки ТЗ до приёмки.
            </p>
          </div>

          <div class="additional-card">
            <div class="additional-number">
              02
            </div>
            <h3>Обучение персонала</h3>
            <p>
              Комплексное обучение медицинского и технического персонала работе
              с разработанными системами. Проведение семинаров, создание обучающих
              материалов, онлайн-курсов и документации.
            </p>
          </div>

          <div class="additional-card">
            <div class="additional-number">
              03
            </div>
            <h3>Техническая поддержка</h3>
            <p>
              Оперативная помощь пользователям, устранение неисправностей,
              консультации по использованию. Поддержка доступна в режиме 24/7
              для критически важных систем.
            </p>
          </div>

          <div class="additional-card">
            <div class="additional-number">
              04
            </div>
            <h3>Обновления и доработки</h3>
            <p>
              Регулярные обновления программного обеспечения, добавление новых
              функций, адаптация под изменяющиеся требования. Поддержка актуальности
              системы на протяжении всего жизненного цикла.
            </p>
          </div>

          <div class="additional-card">
            <div class="additional-number">
              05
            </div>
            <h3>Клинические испытания</h3>
            <p>
              Организация и проведение клинических испытаний медицинских изделий
              по ГОСТ ISO 13485. Сотрудничество с медицинскими учреждениями,
              статистическая обработка результатов.
            </p>
          </div>

          <div class="additional-card">
            <div class="additional-number">
              06
            </div>
            <h3>Сертификация</h3>
            <p>
              Помощь в получении регистрационных удостоверений Росздравнадзора,
              сертификации программного обеспечения как медицинского изделия.
              Подготовка документации и сопровождение процесса.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="business-models-section">
      <div class="container">
        <h2 class="section-title">
          Модели сотрудничества
        </h2>

        <div class="models-grid">
          <div class="model-card">
            <h3>B2B — Медицинские учреждения</h3>
            <p class="model-description">
              Поставка комплексных решений для частных и государственных
              реабилитационных центров, клиник, спортивных медицинских центров.
            </p>
            <div class="model-features">
              <div class="model-feature">
                <span class="feature-check">✓</span>
                <span>Продажа готовых комплектов оборудования</span>
              </div>
              <div class="model-feature">
                <span class="feature-check">✓</span>
                <span>Установка и настройка "под ключ"</span>
              </div>
              <div class="model-feature">
                <span class="feature-check">✓</span>
                <span>Обучение медицинского персонала</span>
              </div>
              <div class="model-feature">
                <span class="feature-check">✓</span>
                <span>Гарантийное и постгарантийное обслуживание</span>
              </div>
              <div class="model-feature">
                <span class="feature-check">✓</span>
                <span>Опция лизинга и рассрочки</span>
              </div>
            </div>
          </div>

          <div class="model-card">
            <h3>B2C — Индивидуальные пользователи</h3>
            <p class="model-description">
              Прямые продажи через маркетплейсы для домашней реабилитации
              и самостоятельных тренировок.
            </p>
            <div class="model-features">
              <div class="model-feature">
                <span class="feature-check">✓</span>
                <span>Доставка через Ozon, Яндекс.Маркет, Wildberries</span>
              </div>
              <div class="model-feature">
                <span class="feature-check">✓</span>
                <span>Упрощённая версия для домашнего использования</span>
              </div>
              <div class="model-feature">
                <span class="feature-check">✓</span>
                <span>Видеоинструкции и онлайн-поддержка</span>
              </div>
              <div class="model-feature">
                <span class="feature-check">✓</span>
                <span>Облачный доступ к персональной статистике</span>
              </div>
              <div class="model-feature">
                <span class="feature-check">✓</span>
                <span>Подписка на расширенные функции (опционально)</span>
              </div>
            </div>
          </div>

          <div class="model-card">
            <h3>B2G — Государственные закупки</h3>
            <p class="model-description">
              Участие в тендерах и госзакупках для оснащения бюджетных
              учреждений здравоохранения.
            </p>
            <div class="model-features">
              <div class="model-feature">
                <span class="feature-check">✓</span>
                <span>Соответствие требованиям 44-ФЗ и 223-ФЗ</span>
              </div>
              <div class="model-feature">
                <span class="feature-check">✓</span>
                <span>Поставка для Минздрава, ФОМС</span>
              </div>
              <div class="model-feature">
                <span class="feature-check">✓</span>
                <span>Оптовые скидки при больших объёмах</span>
              </div>
              <div class="model-feature">
                <span class="feature-check">✓</span>
                <span>Полный пакет разрешительной документации</span>
              </div>
              <div class="model-feature">
                <span class="feature-check">✓</span>
                <span>Гарантия и сервисное обслуживание</span>
              </div>
            </div>
          </div>

          <div class="model-card">
            <h3>Лицензирование технологий</h3>
            <p class="model-description">
              Продажа технологий в формате OEM-лицензий и лицензирование
              программного обеспечения для производителей медоборудования.
            </p>
            <div class="model-features">
              <div class="model-feature">
                <span class="feature-check">✓</span>
                <span>OEM-интеграция в существующие продукты</span>
              </div>
              <div class="model-feature">
                <span class="feature-check">✓</span>
                <span>Передача исходных кодов (опционально)</span>
              </div>
              <div class="model-feature">
                <span class="feature-check">✓</span>
                <span>White-label решения</span>
              </div>
              <div class="model-feature">
                <span class="feature-check">✓</span>
                <span>Техническая поддержка интеграции</span>
              </div>
              <div class="model-feature">
                <span class="feature-check">✓</span>
                <span>Роялти или единовременный платёж</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="process-section">
      <div class="container">
        <h2 class="section-title">
          Процесс работы
        </h2>
        <div class="process-timeline">
          <div class="timeline-item">
            <div class="timeline-marker">
              1
            </div>
            <div class="timeline-content">
              <h3>Анализ требований</h3>
              <p>
                Встреча с заказчиком, изучение специфики задачи, формирование
                технического задания. Определение целевой аудитории, функциональных
                и технических требований.
              </p>
              <div class="timeline-duration">
                1-2 недели
              </div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">
              2
            </div>
            <div class="timeline-content">
              <h3>Проектирование</h3>
              <p>
                Разработка архитектуры системы, создание прототипов интерфейсов,
                выбор технологического стека. Согласование концепции с заказчиком.
              </p>
              <div class="timeline-duration">
                2-3 недели
              </div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">
              3
            </div>
            <div class="timeline-content">
              <h3>Разработка MVP</h3>
              <p>
                Создание минимально жизнеспособного продукта с ключевым функционалом.
                Итеративная разработка с возможностью корректировки по обратной связи.
              </p>
              <div class="timeline-duration">
                1-2 месяца
              </div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">
              4
            </div>
            <div class="timeline-content">
              <h3>Тестирование</h3>
              <p>
                Функциональное, интеграционное и пользовательское тестирование.
                Устранение выявленных дефектов, оптимизация производительности.
              </p>
              <div class="timeline-duration">
                2-4 недели
              </div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">
              5
            </div>
            <div class="timeline-content">
              <h3>Клинические испытания</h3>
              <p>
                Проведение испытаний на здоровых добровольцах и пациентах.
                Сбор данных, статистическая обработка, подготовка отчётов.
              </p>
              <div class="timeline-duration">
                2-3 месяца
              </div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">
              6
            </div>
            <div class="timeline-content">
              <h3>Внедрение</h3>
              <p>
                Установка оборудования, настройка ПО, обучение персонала.
                Сопровождение на этапе запуска, сбор обратной связи от пользователей.
              </p>
              <div class="timeline-duration">
                1-2 недели
              </div>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-marker">
              7
            </div>
            <div class="timeline-content">
              <h3>Поддержка и развитие</h3>
              <p>
                Техническая поддержка, устранение инцидентов, регулярные обновления.
                Развитие функционала на основе пожеланий пользователей.
              </p>
              <div class="timeline-duration">
                постоянно
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="expertise-section">
      <div class="container">
        <h2 class="section-title">
          Наша экспертиза
        </h2>

        <div class="expertise-grid">
          <div class="expertise-card">
            <div class="expertise-stat">
              8-20
            </div>
            <div class="expertise-label">
              каналов обработки ЭМГ
            </div>
          </div>
          <div class="expertise-card">
            <div class="expertise-stat">
              1000 Гц
            </div>
            <div class="expertise-label">
              частота дискретизации
            </div>
          </div>
          <div class="expertise-card">
            <div class="expertise-stat">
              &lt;500 мс
            </div>
            <div class="expertise-label">
              задержка системы
            </div>
          </div>
          <div class="expertise-card">
            <div class="expertise-stat">
              &gt;90%
            </div>
            <div class="expertise-label">
              точность детекции
            </div>
          </div>
          <div class="expertise-card">
            <div class="expertise-stat">
              5 мин
            </div>
            <div class="expertise-label">
              время калибровки
            </div>
          </div>
          <div class="expertise-card">
            <div class="expertise-stat">
              4.5 Вт
            </div>
            <div class="expertise-label">
              энергопотребление
            </div>
          </div>
        </div>

        <div class="stack-section">
          <h3>Технологический стек</h3>
          <div class="stack-categories">
            <div class="stack-category">
              <h4>Обработка сигналов</h4>
              <div class="stack-tags">
                <span class="stack-tag">Python</span>
                <span class="stack-tag">NumPy</span>
                <span class="stack-tag">SciPy</span>
                <span class="stack-tag">DSP</span>
                <span class="stack-tag">Golang</span>
              </div>
            </div>
            <div class="stack-category">
              <h4>Машинное обучение</h4>
              <div class="stack-tags">
                <span class="stack-tag">TensorFlow</span>
                <span class="stack-tag">PyTorch</span>
                <span class="stack-tag">scikit-learn</span>
                <span class="stack-tag">Keras</span>
              </div>
            </div>
            <div class="stack-category">
              <h4>AR/VR разработка</h4>
              <div class="stack-tags">
                <span class="stack-tag">Unity3D</span>
                <span class="stack-tag">C#</span>
              </div>
            </div>
            <div class="stack-category">
              <h4>Веб-разработка</h4>
              <div class="stack-tags">
                <span class="stack-tag">Vue.js</span>
                <span class="stack-tag">TypeScript</span>
                <span class="stack-tag">Node.js</span>
                <span class="stack-tag">WebSocket</span>
              </div>
            </div>
            <div class="stack-category">
              <h4>Встраиваемые системы</h4>
              <div class="stack-tags">
                <span class="stack-tag">C/C++</span>
                <span class="stack-tag">ARM</span>
                <span class="stack-tag">Raspberry Pi</span>
                <span class="stack-tag">Linux</span>
              </div>
            </div>
            <div class="stack-category">
              <h4>Базы данных</h4>
              <div class="stack-tags">
                <span class="stack-tag">PostgreSQL</span>
                <span class="stack-tag">MongoDB</span>
                <span class="stack-tag">Redis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="guarantees-section">
      <div class="container">
        <h2 class="section-title">
          Гарантии качества
        </h2>

        <div class="guarantees-grid">
          <div class="guarantee-card">
            <h3>Соответствие стандартам</h3>
            <p>
              Все разработки соответствуют ГОСТ ISO 13485 для медицинских изделий.
              Проведение обязательных технических и клинических испытаний.
            </p>
          </div>

          <div class="guarantee-card">
            <h3>Защита данных</h3>
            <p>
              Шифрование персональных и медицинских данных в соответствии с 152-ФЗ.
              Безопасная передача и хранение информации пациентов.
            </p>
          </div>

          <div class="guarantee-card">
            <h3>Документация</h3>
            <p>
              Полный пакет технической документации, инструкций для пользователя,
              программ и методик испытаний. Регистрационные удостоверения.
            </p>
          </div>

          <div class="guarantee-card">
            <h3>Гарантийное обслуживание</h3>
            <p>
              Гарантия на оборудование от 12 месяцев. Бесплатное устранение
              дефектов в гарантийный период. Возможность продления гарантии.
            </p>
          </div>

          <div class="guarantee-card">
            <h3>Техническая поддержка</h3>
            <p>
              Оперативная помощь в решении технических проблем. Консультации
              по телефону, email и онлайн. Удалённая диагностика и настройка.
            </p>
          </div>

          <div class="guarantee-card">
            <h3>Регулярные обновления</h3>
            <p>
              Бесплатные обновления программного обеспечения в течение гарантийного
              срока. Улучшение функционала и исправление ошибок.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ServicesView',
})
</script>

<style scoped>
.services-view {
  width: 100%;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 100px 0 80px;
  text-align: center;
}

.hero-title {
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 20px;
}

.hero-subtitle {
  font-size: 20px;
  opacity: 0.95;
  max-width: 700px;
  margin: 0 auto;
}

/* Main Services */
.main-services-section {
  padding: 80px 0;
}

.section-title {
  font-size: 36px;
  text-align: center;
  margin-bottom: 60px;
  color: #e5e5e5;
}

.additional-services-section .section-title {
  color: #1a1a1a;
}

.process-section .section-title {
  color: #1a1a1a;
}

.guarantees-section .section-title {
  color: #1a1a1a;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 35px;
}

.service-card {
  background: white;
  padding: 40px;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
  transition: all 0.3s ease;
}

.service-card:hover {
  border-color: #667eea;
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.15);
  transform: translateY(-5px);
}

.service-header {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 20px;
}

.service-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.service-icon svg {
  width: 30px;
  height: 30px;
  color: white;
}

.service-header h3 {
  font-size: 24px;
  color: #1a1a1a;
  line-height: 1.3;
  margin-top: 5px;
}

.service-description {
  font-size: 15px;
  line-height: 1.7;
  color: #4a5568;
  margin-bottom: 25px;
}

.service-includes h4 {
  font-size: 16px;
  color: #1a1a1a;
  margin-bottom: 15px;
  font-weight: 600;
}

.service-includes ul {
  list-style: none;
  padding: 0;
  margin-bottom: 20px;
}

.service-includes ul li {
  padding: 8px 0;
  padding-left: 25px;
  position: relative;
  font-size: 14px;
  line-height: 1.6;
  color: #4a5568;
}

.service-includes ul li::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #667eea;
  font-weight: 700;
  font-size: 18px;
}

.service-tech {
  padding-top: 20px;
  border-top: 1px solid #e2e8f0;
  font-size: 14px;
  color: #718096;
  line-height: 1.6;
}

.service-tech strong {
  color: #4a5568;
}

/* Additional Services */
.additional-services-section {
  padding: 80px 0;
  background: #f8f9fa;
}

.additional-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.additional-card {
  background: white;
  padding: 35px;
  border-radius: 12px;
  position: relative;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  transition: all 0.3s ease;
}

.additional-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.additional-number {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 48px;
  font-weight: 700;
  color: #f0f0f0;
  line-height: 1;
}

.additional-card h3 {
  font-size: 20px;
  margin-bottom: 15px;
  color: #1a1a1a;
}

.additional-card p {
  font-size: 15px;
  line-height: 1.7;
  color: #4a5568;
}

/* Business Models */
.business-models-section {
  padding: 80px 0;
}

.models-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.model-card {
  background: white;
  padding: 35px;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
  transition: all 0.3s ease;
}

.model-card:hover {
  border-color: #667eea;
  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.1);
  transform: translateY(-5px);
}

.model-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.model-card h3 {
  font-size: 22px;
  margin-bottom: 15px;
  color: #1a1a1a;
}

.model-description {
  font-size: 15px;
  line-height: 1.7;
  color: #4a5568;
  margin-bottom: 25px;
}

.model-features {
  margin-bottom: 25px;
}

.model-feature {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 1.6;
  color: #4a5568;
}

.feature-check {
  color: #667eea;
  font-weight: 700;
  flex-shrink: 0;
}

.model-price {
  padding-top: 20px;
  border-top: 1px solid #e2e8f0;
  font-size: 15px;
  color: #1a1a1a;
}

.model-price strong {
  color: #667eea;
}

/* Process Timeline */
.process-section {
  padding: 80px 0;
  background: #f8f9fa;
}

.process-timeline {
  max-width: 800px;
  margin: 0 auto;
}

.timeline-item {
  display: flex;
  gap: 30px;
  margin-bottom: 40px;
  position: relative;
}

.timeline-item::after {
  content: '';
  position: absolute;
  left: 29px;
  top: 60px;
  bottom: -40px;
  width: 2px;
  background: #e2e8f0;
}

.timeline-item:last-child::after {
  display: none;
}

.timeline-marker {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  font-weight: 700;
  flex-shrink: 0;
  box-shadow: 0 4px 10px rgba(102, 126, 234, 0.3);
  position: relative;
  z-index: 1;
}

.timeline-content {
  flex: 1;
  background: white;
  padding: 25px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
}

.timeline-content h3 {
  font-size: 20px;
  margin-bottom: 12px;
  color: #1a1a1a;
}

.timeline-content p {
  font-size: 15px;
  line-height: 1.7;
  color: #4a5568;
  margin-bottom: 12px;
}

.timeline-duration {
  display: inline-block;
  background: #f0f4ff;
  color: #667eea;
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
}

/* Expertise */
.expertise-section {
  padding: 80px 0;
}

.expertise-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 25px;
  margin-bottom: 60px;
}

.expertise-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  text-align: center;
  border: 2px solid #e2e8f0;
  transition: all 0.3s ease;
}

.expertise-card:hover {
  border-color: #667eea;
  transform: translateY(-5px);
}

.expertise-stat {
  font-size: 36px;
  font-weight: 700;
  color: #667eea;
  margin-bottom: 8px;
}

.expertise-label {
  font-size: 13px;
  color: #718096;
  line-height: 1.4;
}

.stack-section {
  background: #f8f9fa;
  padding: 40px;
  border-radius: 12px;
}

.stack-section h3 {
  font-size: 26px;
  margin-bottom: 30px;
  color: #1a1a1a;
  text-align: center;
}

.stack-categories {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
}

.stack-category h4 {
  font-size: 16px;
  margin-bottom: 15px;
  color: #1a1a1a;
  font-weight: 600;
}

.stack-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.stack-tag {
  background: white;
  color: #667eea;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 500;
  border: 1px solid #e2e8f0;
}

/* Guarantees */
.guarantees-section {
  padding: 80px 0;
  background: #f8f9fa;
}

.guarantees-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.guarantee-card {
  background: white;
  padding: 35px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  transition: all 0.3s ease;
}

.guarantee-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.guarantee-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.guarantee-card h3 {
  font-size: 20px;
  margin-bottom: 15px;
  color: #1a1a1a;
}

.guarantee-card p {
  font-size: 15px;
  line-height: 1.7;
  color: #4a5568;
}

/* CTA Section */
.cta-section {
  padding: 80px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.cta-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
}

.cta-content h2 {
  font-size: 36px;
  margin-bottom: 20px;
}

.cta-content p {
  font-size: 18px;
  margin-bottom: 35px;
  opacity: 0.95;
  line-height: 1.7;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.btn-primary,
.btn-secondary {
  padding: 16px 32px;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: white;
  color: #667eea;
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(255, 255, 255, 0.3);
}

.btn-secondary {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background: rgba(255, 255, 255, 0.1);
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 36px;
  }

  .section-title {
    font-size: 28px;
  }

  .services-grid {
    grid-template-columns: 1fr;
  }

  .additional-grid,
  .models-grid,
  .guarantees-grid {
    grid-template-columns: 1fr;
  }

  .timeline-item {
    flex-direction: column;
    gap: 15px;
  }

  .timeline-item::after {
    display: none;
  }

  .expertise-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .stack-categories {
    grid-template-columns: 1fr;
  }

  .cta-buttons {
    flex-direction: column;
  }

  .btn-primary,
  .btn-secondary {
    width: 100%;
  }
}
</style>
