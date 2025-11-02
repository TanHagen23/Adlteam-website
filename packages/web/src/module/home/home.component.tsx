import styles from "./home.module.css"
import hero from "../../assets/images/wp7111933.jpg"
import deviHub from "../../assets/images/devi-hub.png"
import autoBid from "../../assets/images/autoBid.png"
import greenTech from "../../assets/images/greenTech.png"
import senseiGpt from "../../assets/images/senseiGpt.png"
import docMed from "../../assets/images/docMed.png"
import deviHubphone from "../../assets/images/deviHubphone.jpg"
import darkstreet from "../../assets/images/darkstreet.jpg"
import "../../style/font-awesome.css"
import { useEffect, useRef } from "react"

export function Home() {
  const bgRef = useRef<HTMLImageElement>(null)
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${y * 0.3}px)`
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  })

  return (
    <div>
      {/* ===== SECTION 1: HERO ===== */}
      <section className={styles.hero} aria-label="Main banner">
        <img ref={bgRef} src={hero} alt="" className={styles.bg} />

        <div className={styles.title}>
          <h3 className={styles.title_content}>
            Ведущая Web-студия
            <br />
            для выхода бизнеса на
            <br />
            новый уровень
          </h3>

          <a href="/" className={styles.more_info}>
            Подробнее
          </a>
        </div>
        <div className={styles.heroBottom}>
          <div className={styles.counter}>
            <button className={styles.navBtn} aria-label="previous">
              &#10094;
            </button>
            <span className={styles.numActive}>01</span>
            <span className={styles.progress} aria-hidden="true" />
            <span className={styles.numTotal}>06</span>
            <button className={styles.navBtn} aria-label="next">
              &#10095;
            </button>
          </div>

          <div className={styles.scrollHint} aria-hidden="true">
            <span className={styles.scrollDot} />
          </div>

          <a href="/" className={styles.discussLink}>
            Обсудить проект
          </a>
        </div>
      </section>

      {/* ===== SECTION 2: POPULAR SERVICES ===== */}

      <section
        className={styles.services}
        id="services"
        aria-labelledby="services-title"
      >
        <div className={styles.services_header}>
          <h2 id="services-title" className={styles.services_title}>
            Популярные услуги,
          </h2>
          <p className={styles.services_subtitle}>
            для выхода бизнеса на новый уровень
          </p>
        </div>

        <ul className={styles.services_grid}>
          <li className={styles.card}>
            <h3 className={styles.card_title}>
              Разработка веб-продуктов (SPA/MPA){" "}
            </h3>
            <p className={styles.card_desc}>
              Проектируем и создаём быстрые веб-приложения на React + TypeScript
              с надёжным бэком на Node/Nest. Реал-тайм (Socket.io),
              GraphQL/REST, авторизация (JWT/Passkey), админ-панели, PWA.
            </p>
            <div className={styles.card_icon} aria-hidden="true" />
            <div className={styles.card_overlay} aria-hidden="true" />
          </li>

          <li className={styles.card}>
            <h3 className={styles.card_title}>
              Мобильные приложения (React Native)
            </h3>
            <p className={styles.card_desc}>
              Нативные iOS/Android-приложения: сканирование/QR-код сценарии,
              офлайн-режим, интеграции с камерой и хранилищем, пуш-уведомления,
              публикация в сторах.
            </p>
            <div className={styles.card_icon} aria-hidden="true" />
            <div className={styles.card_overlay} aria-hidden="true" />
          </li>

          <li className={styles.card}>
            <h3 className={styles.card_title}>
              E-commerce & омниканал ИТ - проектов
            </h3>
            <p className={styles.card_desc}>
              Каталоги, корзина, заказы, платежи, фискализация, личные кабинеты,
              интеграции с ERP/CRM/CDP. Единая витрина для веба и мобилки,
              единая авторизация и профиль.
            </p>
            <div className={styles.card_icon} aria-hidden="true" />
            <div className={styles.card_overlay} aria-hidden="true" />
          </li>

          <li className={styles.card}>
            <h3 className={styles.card_title}>Интеграция AI-функций</h3>
            <p className={styles.card_desc}>
              Подключаем ChatGPT-подобные ассистенты, генерацию ответов, поиск
              по актуальным данным, голос/чат, сценарии обучения или подготовки
              уроков, анализ запросов пользователей.
            </p>
            <div className={styles.card_icon} aria-hidden="true" />
            <div className={styles.card_overlay} aria-hidden="true" />
          </li>

          <li className={styles.card}>
            <h3 className={styles.card_title}>
              Высоконагруженные решения и масштабирование
            </h3>
            <p className={styles.card_desc}>
              Проектирование архитектуры под рост: кэш (Redis), очереди,
              горизонтальное масштабирование, оптимизация БД (PostgreSQL/MySQL
              /SQLite), профилирование узких мест.
            </p>
            <div className={styles.card_icon} aria-hidden="true" />
            <div className={styles.card_overlay} aria-hidden="true" />
          </li>

          <li className={styles.card}>
            <h3 className={styles.card_title}>
              {" "}
              Внедрение Passkey, безопасность и авторизация
            </h3>
            <p className={styles.card_desc}>
              Пароли без паролей (Passkey/WebAuthn) JWT/refresh-потоки, ротация
              ключей, защита API-эндпоинтов, аудит ролей и доступов для админок
              и пользовательских зон.
            </p>
            <div className={styles.card_icon} aria-hidden="true" />
            <div className={styles.card_overlay} aria-hidden="true" />
          </li>
        </ul>
      </section>

      {/* ===== SECTION 3 : Products ===== */}

      <section
        className={styles.products}
        id="products"
        aria-labelledby="products-title"
      >
        <div className={styles.products_wrapper}>
          <div className={styles.products_image}>
            <img
              src={deviHub}
              alt="Devi-hub preview"
              className={styles.products_img}
            />
          </div>

          <div className={styles.products_content}>
            <div className={styles.products_header}>
              <h2 className={styles.products_title}>Devi-hub</h2>
              <button
                className={styles.products_arrow}
                aria-label="next project"
              >
                <i
                  className="fa-solid fa-arrow-right"
                  style={{ color: "#000" }}
                />
              </button>
            </div>

            <p className={styles.products_text}>
              Платформа, использующая собственный искусственный интеллект для
              мгновенного формирования оптимизированных технических команд из
              тщательно отобранного пула экспертов, что позволяет бизнесу быстро
              собрать идеальную команду для своих потребностей в разработке.
            </p>

            <a href="/" className={styles.products_more}>
              Подробнее
            </a>

            <div className={styles.products_counter}>
              <span className={styles.products_numActive}>01</span>
              <span className={styles.products_progress}></span>
              <span className={styles.products_numTotal}>09</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==== SECTION 4: PROJECTS ==== */}

      <section
        className={styles.projects}
        id="projects"
        aria-labelledby="projects-title"
      >
        <div className={styles.projects_header}>
          <h2 id="projects-title" className={styles.projects_title}>
            Проекты
          </h2>
        </div>

        <ul className={styles.projects_grid}>
          <li className={styles.project_card}>
            <div className={styles.project_info}>
              <h3>Devi-hub</h3>
              <p>
                Платформа, использующая собственный искусственный интеллект для
                мгновенного формирования оптимизированных технических команд из
                тщательно отобранного пула экспертов, что позволяет бизнесу
                быстро собрать идеальную команду для своих потребностей в
                разработке.
              </p>
            </div>
            <img src={deviHubphone} alt="Devi-hub preview" />
          </li>

          <li className={styles.project_card}>
            <div className={styles.project_info}>
              <h3>Sensei-GPT</h3>
              <p>
                Образовательное веб-приложение с ИИ, планированием уроков, чатом
                и оплатой через AWS.
              </p>
            </div>
            <img src={senseiGpt} alt="Sensei-GPT preview" />
          </li>

          <li className={styles.project_card}>
            <div className={styles.project_info}>
              <h3>Green-Tech</h3>
              <p>Имиджевый сайт</p>
            </div>
            <img src={greenTech} alt="Green-Tech preview" />
          </li>

          <li className={styles.project_card}>
            <div className={styles.project_info}>
              <h3>AUTO-BID</h3>
              <p>
                Глобальный сайт продаж авто из США с прозрачными сделками и
                прямой работой с аукционами.
              </p>
            </div>
            <img src={autoBid} alt="AUTO-BID preview" />
          </li>

          <li className={styles.project_card}>
            <div className={styles.project_info}>
              <h3>Doc-Med</h3>
              <p>UX-аудит сайта</p>
            </div>
            <img src={docMed} alt="Doc-Med preview" />
          </li>
        </ul>

        <a href="/" className={styles.projects_more}>
          Все проекты
        </a>
      </section>

      {/* ==== SECTION 5: SERVICES ==== */}

      <section className={styles.ourservice} aria-label="Main banner">
        <img src={darkstreet} alt="" className={styles.bg} />
        <div className={styles.service_content}>
          <h3 className={styles.service_label}>Услуги</h3>
          <h2 className={styles.service_heading}>
            Разработка <br className="service_heading2 " />
            сайтов
          </h2>
          <p className={styles.service_text}>
            Проектируем и создаём быстрые веб-приложения на React + TypeScript с
            надёжным бэком на Node/Nest. Реал-тайм (Socket.io), GraphQL/REST,
            авторизация (JWT/Passkey), админ-панели, PWA.
          </p>
        </div>

        <div className={styles.serviceCounter}>
          <span className={styles.servicenumActive}>01</span>
          <span className={styles.serviceProgress} aria-hidden="true" />
          <span className={styles.servicenumTotal}>06</span>
        </div>
      </section>
    </div>
  )
}
