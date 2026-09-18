// "use strict";
const translations = {
    en: {
        meta: {
            title: "EcoTrack | Corporate Carbon Footprint Management",
            description: "EcoTrack is a B2B SaaS platform developed by Horizon to help organizations register, calculate, analyze and manage greenhouse gas emissions and their corporate carbon footprint."
        },

        a11y: {
            home: "EcoTrack home",
            primaryNavigation: "Primary navigation",
            openNavigation: "Open navigation menu",
            dashboardPreview: "Illustrative EcoTrack emissions dashboard preview using sample data",
            footerNavigation: "Footer navigation"
        },

        nav: {
            home: "Home",
            features: "Features",
            howItWorks: "How It Works",
            standards: "Standards",
            plans: "Plans",
            contact: "Contact",
            getStarted: "Get Started"
        },

        dashboard: {
            title: "Emissions Dashboard",
            totalEmissions: "Total Emissions",
            scope1: "Scope 1",
            scope2: "Scope 2",
            scope3: "Scope 3",
            emissionTrend: "Emission Trend",
            lastSixMonths: "Last 6 months",
            reductionGoal: "Reduction Goal",
            annualProgress: "Annual target progress"
        },

        hero: {
            eyebrow: "CARBON FOOTPRINT MANAGEMENT FOR BUSINESS",
            title: "Turn Emissions Data into Clear Environmental Decisions",
            description: "Centralize emissions data, calculate your carbon footprint, track environmental performance and turn results into measurable reduction goals — all in one platform.",
            primaryCta: "Get Started",
            secondaryCta: "Explore EcoTrack"
        },

        problem: {
            eyebrow: "THE CHALLENGE",
            title: "Your Environmental Data Shouldn't Be Scattered Across Different Tools",
            description: "Spreadsheets, documents and disconnected systems make environmental information harder to consolidate, update and analyze. EcoTrack brings your emissions data and carbon footprint management into one structured environment.",
            card1Title: "Centralize Environmental Data",
            card1Text: "Bring emissions information from different areas, activities and locations into one organized platform.",
            card2Title: "Reduce Manual Work",
            card2Text: "Use registered activity data and emission factors to calculate carbon footprint results with less dependence on manual calculations.",
            card3Title: "Make Information Easier to Understand",
            card3Text: "Turn emissions data into indicators, comparisons and reports that help your team understand environmental performance."
        },

        segments: {
            eyebrow: "WHO ECOTRACK IS FOR",
            title: "Built for Companies That Need Better Control of Their Environmental Information",
            description: "EcoTrack supports organizations that need to measure emissions, organize environmental data and turn that information into useful insights for sustainability management.",
            exportingTitle: "Exporting Companies",
            exportingText: "For companies in agriculture, textile, mining and other productive sectors that need better control of emissions information for sustainability, reporting, audit and certification processes.",
            exportingSmall: "Sustainability · Reporting · Environmental Management",
            corporationsTitle: "Corporations & Medium-Sized Industrial Companies",
            corporationsText: "For organizations managing environmental information across multiple areas, processes or locations that need a clearer view of their emissions and environmental performance.",
            corporationsSmall: "Operations · Multiple Locations · Environmental Monitoring"
        },

        features: {
            eyebrow: "CORE CAPABILITIES",
            title: "Everything You Need to Manage Your Carbon Footprint",
            description: "EcoTrack connects the essential processes your organization needs to register emissions, calculate results, understand performance and follow environmental objectives.",
            card1Title: "Centralize Your Emissions Data",
            card1Text: "Register, classify and maintain emissions information across Scope 1, Scope 2 and Scope 3 in a structured history.",
            card2Title: "Calculate Your Carbon Footprint",
            card2Text: "Use activity data and emission factors to obtain carbon footprint results by scope and reporting period.",
            card3Title: "Turn Results into Reduction Goals",
            card3Text: "Define environmental goals, create reduction plans, register initiatives and monitor progress over time.",
            card4Title: "Understand Your Environmental Performance",
            card4Text: "Use dashboards, indicators and period comparisons to identify trends and your organization's main emission sources.",
            card5Title: "Keep Your Organization Connected",
            card5Text: "Manage users, locations and organizational information within the same environmental management environment."
        },

        scopes: {
            eyebrow: "EMISSION SCOPES",
            title: "Understand Where Your Emissions Come From",
            description: "EcoTrack organizes greenhouse gas information across Scope 1, Scope 2 and Scope 3, helping your organization understand the different sources behind its carbon footprint.",

            scope1Label: "SCOPE 1",
            scope1Title: "Direct Emissions",
            scope1Text: "Emissions generated directly by sources owned or controlled by your organization.",
            scope1Small: "Owned or controlled sources",

            scope2Label: "SCOPE 2",
            scope2Title: "Indirect Energy Emissions",
            scope2Text: "Indirect emissions associated with electricity and other forms of energy acquired by your organization.",
            scope2Small: "Purchased energy",

            scope3Label: "SCOPE 3",
            scope3Title: "Other Indirect Emissions",
            scope3Text: "Other indirect emissions generated through activities across your organization's value chain.",
            scope3Small: "Value chain activities"
        },

        process: {
            eyebrow: "HOW IT WORKS",
            title: "From Environmental Data to Action in Five Steps",
            description: "EcoTrack connects the main stages of carbon footprint management in a simple and structured workflow.",

            step1Title: "Register Emissions Data",
            step1Text: "Record the activities, consumption and sources related to your organization's emissions.",

            step2Title: "Calculate Your Carbon Footprint",
            step2Text: "EcoTrack uses registered activity data and emission factors to calculate greenhouse gas emissions.",

            step3Title: "Understand Your Results",
            step3Text: "Review emissions by scope, indicators, trends and comparisons between reporting periods.",

            step4Title: "Plan Your Reduction Efforts",
            step4Text: "Create environmental goals and reduction plans and follow the progress of your initiatives.",

            step5Title: "Generate Environmental Reports",
            step5Text: "Turn your environmental information and carbon footprint results into structured reports for analysis and communication."
        },

        standards: {
            eyebrow: "RECOGNIZED FRAMEWORKS",
            title: "Manage Emissions with International Standards in Mind",
            description: "EcoTrack considers recognized frameworks for greenhouse gas accounting and reporting to help organizations structure their environmental information more clearly.",

            ghgTitle: "GHG Protocol",
            ghgText: "EcoTrack uses the GHG Protocol as a reference for organizing corporate greenhouse gas emissions across Scope 1, Scope 2 and Scope 3.",
            ghgSmall: "Greenhouse gas accounting framework",

            isoTitle: "ISO 14064",
            isoText: "EcoTrack considers ISO 14064 as a reference for the quantification and reporting of greenhouse gas emissions at the organizational level.",
            isoSmall: "Organizational GHG information reference",

            note: "These frameworks are used as references within EcoTrack and do not represent certifications or accreditations of the platform."
        },

        plans: {
            eyebrow: "PLANS",
            title: "Choose the Level of Environmental Management Your Organization Needs",
            description: "Start with essential carbon footprint management and scale toward advanced analytics, multiple locations and automated data integration as your organization grows.",

            basic: {
                name: "Basic",
                price: "S/ 199 <span>/ month</span>",
                description: "Start measuring and organizing your company's carbon footprint.",
                feature1: "Up to 3 users",
                feature2: "1 location",
                feature3: "Scope 1 and Scope 2",
                feature4: "Manual emissions registration",
                feature5: "Automatic carbon footprint calculation",
                feature6: "Basic dashboard",
                feature7: "Emissions history",
                feature8: "Basic PDF reports",
                feature9: "Email support",
                cta: "Get Started"
            },

            pro: {
                badge: "RECOMMENDED",
                name: "Pro",
                price: "S/ 499 <span>/ month</span>",
                description: "Go beyond measurement with deeper analysis, goals and reduction planning.",
                feature1: "Up to 10 users",
                feature2: "Up to 3 locations",
                feature3: "Scope 1, Scope 2 and Scope 3",
                feature4: "Advanced dashboard",
                feature5: "Period comparison",
                feature6: "Environmental goals",
                feature7: "Reduction plans",
                feature8: "Advanced indicators",
                feature9: "Customizable reports",
                feature10: "Data export",
                feature11: "Priority support",
                cta: "Choose Pro"
            },

            enterprise: {
                name: "Enterprise",
                price: "From S/ 1,200 <span>/ month</span>",
                description: "Scale environmental management across multiple locations and business operations.",
                feature1: "From 25 users",
                feature2: "From 10 locations",
                feature3: "Everything in Pro",
                feature4: "Executive dashboards",
                feature5: "Multi-location data consolidation",
                feature6: "Advanced roles and permissions",
                feature7: "Advanced reports",
                feature8: "CSV data import",
                feature9: "EcoTrack API access",
                feature10: "Automated data registration from external systems",
                feature11: "Enterprise support",
                cta: "Contact Us"
            }
        },

        finalCta: {
            eyebrow: "START MANAGING YOUR ENVIRONMENTAL DATA",
            title: "Turn Environmental Information into Better Decisions",
            description: "Bring your emissions data, carbon footprint results and environmental goals into one platform and build a clearer view of your organization's environmental performance.",
            primary: "Get Started",
            secondary: "View Plans"
        },

        contact: {
            eyebrow: "CONTACT",
            title: "Let's Talk About Your Environmental Management Needs",
            description: "Tell us about your organization and how you currently manage emissions information. We can help you explore how EcoTrack could fit your environmental management process.",
            benefit1: "Explore the EcoTrack plan that fits your organization.",
            benefit2: "Understand how emissions management can be centralized.",
            benefit3: "Learn how EcoTrack supports different levels of environmental management.",
            companyName: "Company Name",
            email: "Corporate Email",
            sector: "Sector",
            phone: "Phone <span>(Optional)</span>",
            message: "Message",
            messagePlaceholder: "Tell us briefly about your environmental management needs.",
            consent: "I agree to be contacted regarding my request.",
            submit: "Send Request"
        },

        about: {
            eyebrow: "ABOUT HORIZON",
            title: "Technology Designed for Better Environmental Management",
            description: "Horizon develops digital solutions that help organizations simplify environmental processes, organize information and make sustainability management easier to understand and control.",
            teamEyebrow: "DEVELOPMENT TEAM",
            teamTitle: "Meet the Team Behind EcoTrack",
            teamDescription: "EcoTrack is developed by the Horizon team as part of our commitment to building technology for more organized and understandable environmental management.",
            developer: "Developer"
        },

        footer: {
            description: "Carbon footprint management for modern organizations.",
            product: "Product",
            features: "Features",
            scopes: "Emission Scopes",
            howItWorks: "How It Works",
            plans: "Plans",
            about: "About Horizon",
            terms: "Terms & Conditions",
            rights: "© 2026 Horizon. All rights reserved."
        }
    },

    es: {
        meta: {
            title: "EcoTrack | Gestión de Huella de Carbono Corporativa",
            description: "EcoTrack es una plataforma SaaS B2B desarrollada por Horizon para ayudar a las organizaciones a registrar, calcular, analizar y gestionar las emisiones de gases de efecto invernadero y su huella de carbono corporativa."
        },

        a11y: {
            home: "Inicio de EcoTrack",
            primaryNavigation: "Navegación principal",
            openNavigation: "Abrir menú de navegación",
            dashboardPreview: "Vista ilustrativa del dashboard de emisiones de EcoTrack con datos de ejemplo",
            footerNavigation: "Navegación del pie de página"
        },

        nav: {
            home: "Inicio",
            features: "Funciones",
            howItWorks: "Cómo funciona",
            standards: "Estándares",
            plans: "Planes",
            contact: "Contacto",
            getStarted: "Comenzar"
        },

        dashboard: {
            title: "Dashboard de Emisiones",
            totalEmissions: "Emisiones Totales",
            scope1: "Alcance 1",
            scope2: "Alcance 2",
            scope3: "Alcance 3",
            emissionTrend: "Tendencia de Emisiones",
            lastSixMonths: "Últimos 6 meses",
            reductionGoal: "Meta de Reducción",
            annualProgress: "Progreso de la meta anual"
        },

        hero: {
            eyebrow: "GESTIÓN DE HUELLA DE CARBONO PARA EMPRESAS",
            title: "Convierte los datos de emisiones en decisiones ambientales más claras",
            description: "Centraliza los datos de emisiones, calcula tu huella de carbono, monitorea el desempeño ambiental y convierte los resultados en metas de reducción medibles, todo desde una sola plataforma.",
            primaryCta: "Comenzar",
            secondaryCta: "Explorar EcoTrack"
        },

        problem: {
            eyebrow: "EL DESAFÍO",
            title: "Tu información ambiental no debería estar dispersa entre diferentes herramientas",
            description: "Las hojas de cálculo, documentos y sistemas desconectados dificultan consolidar, actualizar y analizar la información ambiental. EcoTrack reúne tus datos de emisiones y la gestión de la huella de carbono en un entorno estructurado.",
            card1Title: "Centraliza la información ambiental",
            card1Text: "Reúne información de emisiones de diferentes áreas, actividades y sedes en una sola plataforma organizada.",
            card2Title: "Reduce el trabajo manual",
            card2Text: "Utiliza los datos de actividad registrados y factores de emisión para calcular la huella de carbono con una menor dependencia de cálculos manuales.",
            card3Title: "Haz que la información sea más fácil de entender",
            card3Text: "Convierte los datos de emisiones en indicadores, comparaciones y reportes que ayuden a tu equipo a comprender el desempeño ambiental."
        },

        segments: {
            eyebrow: "PARA QUIÉN ES ECOTRACK",
            title: "Diseñado para empresas que necesitan un mayor control de su información ambiental",
            description: "EcoTrack apoya a organizaciones que necesitan medir emisiones, organizar información ambiental y convertir esos datos en información útil para la gestión de sostenibilidad.",
            exportingTitle: "Empresas exportadoras",
            exportingText: "Para empresas de agricultura, textil, minería y otros sectores productivos que necesitan un mayor control de la información de emisiones para procesos de sostenibilidad, reportes, auditorías y certificaciones.",
            exportingSmall: "Sostenibilidad · Reportes · Gestión ambiental",
            corporationsTitle: "Corporaciones y empresas industriales medianas",
            corporationsText: "Para organizaciones que gestionan información ambiental de múltiples áreas, procesos o sedes y necesitan una visión más clara de sus emisiones y desempeño ambiental.",
            corporationsSmall: "Operaciones · Múltiples sedes · Monitoreo ambiental"
        },

        features: {
            eyebrow: "CAPACIDADES PRINCIPALES",
            title: "Todo lo que necesitas para gestionar tu huella de carbono",
            description: "EcoTrack conecta los procesos esenciales que tu organización necesita para registrar emisiones, calcular resultados, comprender su desempeño y dar seguimiento a objetivos ambientales.",
            card1Title: "Centraliza tus datos de emisiones",
            card1Text: "Registra, clasifica y conserva información de emisiones de Alcance 1, Alcance 2 y Alcance 3 dentro de un historial estructurado.",
            card2Title: "Calcula tu huella de carbono",
            card2Text: "Utiliza datos de actividad y factores de emisión para obtener resultados de huella de carbono por alcance y periodo de reporte.",
            card3Title: "Convierte resultados en metas de reducción",
            card3Text: "Define metas ambientales, crea planes de reducción, registra iniciativas y monitorea su progreso a lo largo del tiempo.",
            card4Title: "Comprende tu desempeño ambiental",
            card4Text: "Utiliza dashboards, indicadores y comparaciones entre periodos para identificar tendencias y las principales fuentes de emisión de tu organización.",
            card5Title: "Mantén conectada tu organización",
            card5Text: "Gestiona usuarios, sedes e información organizacional dentro del mismo entorno de gestión ambiental."
        },

        scopes: {
            eyebrow: "ALCANCES DE EMISIONES",
            title: "Entiende de dónde provienen tus emisiones",
            description: "EcoTrack organiza la información de gases de efecto invernadero entre Alcance 1, Alcance 2 y Alcance 3, ayudando a tu organización a comprender las diferentes fuentes detrás de su huella de carbono.",

            scope1Label: "ALCANCE 1",
            scope1Title: "Emisiones directas",
            scope1Text: "Emisiones generadas directamente por fuentes que pertenecen o son controladas por tu organización.",
            scope1Small: "Fuentes propias o controladas",

            scope2Label: "ALCANCE 2",
            scope2Title: "Emisiones indirectas por energía",
            scope2Text: "Emisiones indirectas asociadas con la electricidad y otras formas de energía adquiridas por tu organización.",
            scope2Small: "Energía adquirida",

            scope3Label: "ALCANCE 3",
            scope3Title: "Otras emisiones indirectas",
            scope3Text: "Otras emisiones indirectas generadas mediante actividades a lo largo de la cadena de valor de tu organización.",
            scope3Small: "Actividades de la cadena de valor"
        },

        process: {
            eyebrow: "CÓMO FUNCIONA",
            title: "De los datos ambientales a la acción en cinco pasos",
            description: "EcoTrack conecta las principales etapas de la gestión de la huella de carbono mediante un flujo simple y estructurado.",

            step1Title: "Registra datos de emisiones",
            step1Text: "Registra las actividades, consumos y fuentes relacionadas con las emisiones de tu organización.",

            step2Title: "Calcula tu huella de carbono",
            step2Text: "EcoTrack utiliza los datos de actividad registrados y factores de emisión para calcular las emisiones de gases de efecto invernadero.",

            step3Title: "Comprende tus resultados",
            step3Text: "Revisa las emisiones por alcance, indicadores, tendencias y comparaciones entre periodos de reporte.",

            step4Title: "Planifica tus esfuerzos de reducción",
            step4Text: "Crea metas ambientales y planes de reducción y realiza seguimiento al progreso de tus iniciativas.",

            step5Title: "Genera reportes ambientales",
            step5Text: "Convierte tu información ambiental y los resultados de huella de carbono en reportes estructurados para análisis y comunicación."
        },

        standards: {
            eyebrow: "MARCOS DE REFERENCIA RECONOCIDOS",
            title: "Gestiona tus emisiones considerando estándares internacionales",
            description: "EcoTrack considera marcos reconocidos para la contabilización y reporte de gases de efecto invernadero, ayudando a las organizaciones a estructurar su información ambiental con mayor claridad.",

            ghgTitle: "GHG Protocol",
            ghgText: "EcoTrack utiliza el GHG Protocol como referencia para organizar las emisiones corporativas de gases de efecto invernadero entre Alcance 1, Alcance 2 y Alcance 3.",
            ghgSmall: "Marco para la contabilización de gases de efecto invernadero",

            isoTitle: "ISO 14064",
            isoText: "EcoTrack considera ISO 14064 como referencia para la cuantificación y reporte de emisiones de gases de efecto invernadero a nivel organizacional.",
            isoSmall: "Referencia para información organizacional de GEI",

            note: "Estos marcos se utilizan como referencias dentro de EcoTrack y no representan certificaciones ni acreditaciones de la plataforma."
        },

        plans: {
            eyebrow: "PLANES",
            title: "Elige el nivel de gestión ambiental que necesita tu organización",
            description: "Comienza con la gestión esencial de tu huella de carbono y escala hacia análisis avanzados, múltiples sedes e integración automatizada de datos a medida que tu organización crece.",

            basic: {
                name: "Basic",
                price: "S/ 199 <span>/ mes</span>",
                description: "Empieza a medir y organizar la huella de carbono de tu empresa.",
                feature1: "Hasta 3 usuarios",
                feature2: "1 sede",
                feature3: "Alcance 1 y Alcance 2",
                feature4: "Registro manual de emisiones",
                feature5: "Cálculo automático de huella de carbono",
                feature6: "Dashboard básico",
                feature7: "Historial de emisiones",
                feature8: "Reportes PDF básicos",
                feature9: "Soporte por correo electrónico",
                cta: "Comenzar"
            },

            pro: {
                badge: "RECOMENDADO",
                name: "Pro",
                price: "S/ 499 <span>/ mes</span>",
                description: "Ve más allá de la medición con análisis más profundos, metas y planificación de reducción.",
                feature1: "Hasta 10 usuarios",
                feature2: "Hasta 3 sedes",
                feature3: "Alcance 1, Alcance 2 y Alcance 3",
                feature4: "Dashboard avanzado",
                feature5: "Comparación entre periodos",
                feature6: "Metas ambientales",
                feature7: "Planes de reducción",
                feature8: "Indicadores avanzados",
                feature9: "Reportes personalizables",
                feature10: "Exportación de datos",
                feature11: "Soporte prioritario",
                cta: "Elegir Pro"
            },

            enterprise: {
                name: "Enterprise",
                price: "Desde S/ 1,200 <span>/ mes</span>",
                description: "Escala la gestión ambiental entre múltiples sedes y operaciones empresariales.",
                feature1: "Desde 25 usuarios",
                feature2: "Desde 10 sedes",
                feature3: "Todo lo incluido en Pro",
                feature4: "Dashboards ejecutivos",
                feature5: "Consolidación de datos entre múltiples sedes",
                feature6: "Roles y permisos avanzados",
                feature7: "Reportes avanzados",
                feature8: "Importación de datos mediante CSV",
                feature9: "Acceso a EcoTrack API",
                feature10: "Registro automatizado de datos desde sistemas externos",
                feature11: "Soporte empresarial",
                cta: "Contáctanos"
            }
        },

        finalCta: {
            eyebrow: "EMPIEZA A GESTIONAR TU INFORMACIÓN AMBIENTAL",
            title: "Convierte la información ambiental en mejores decisiones",
            description: "Reúne tus datos de emisiones, resultados de huella de carbono y metas ambientales en una sola plataforma y construye una visión más clara del desempeño ambiental de tu organización.",
            primary: "Comenzar",
            secondary: "Ver planes"
        },

        contact: {
            eyebrow: "CONTACTO",
            title: "Conversemos sobre las necesidades de gestión ambiental de tu organización",
            description: "Cuéntanos sobre tu organización y cómo gestionan actualmente la información de emisiones. Podemos ayudarte a explorar cómo EcoTrack podría integrarse en tu proceso de gestión ambiental.",
            benefit1: "Explora el plan EcoTrack que se adapte a tu organización.",
            benefit2: "Conoce cómo puedes centralizar la gestión de emisiones.",
            benefit3: "Descubre cómo EcoTrack apoya diferentes niveles de gestión ambiental.",
            companyName: "Nombre de la empresa",
            email: "Correo corporativo",
            sector: "Sector",
            phone: "Teléfono <span>(Opcional)</span>",
            message: "Mensaje",
            messagePlaceholder: "Cuéntanos brevemente sobre tus necesidades de gestión ambiental.",
            consent: "Acepto ser contactado en relación con mi solicitud.",
            submit: "Enviar solicitud"
        },

        about: {
            eyebrow: "SOBRE HORIZON",
            title: "Tecnología diseñada para una mejor gestión ambiental",
            description: "Horizon desarrolla soluciones digitales que ayudan a las organizaciones a simplificar procesos ambientales, organizar información y hacer que la gestión de sostenibilidad sea más fácil de comprender y controlar.",
            teamEyebrow: "EQUIPO DE DESARROLLO",
            teamTitle: "Conoce al equipo detrás de EcoTrack",
            teamDescription: "EcoTrack es desarrollado por el equipo Horizon como parte de nuestro compromiso con la creación de tecnología para una gestión ambiental más organizada y comprensible.",
            developer: "Desarrollador"
        },

        footer: {
            description: "Gestión de huella de carbono para organizaciones modernas.",
            product: "Producto",
            features: "Funciones",
            scopes: "Alcances de emisiones",
            howItWorks: "Cómo funciona",
            plans: "Planes",
            about: "Sobre Horizon",
            terms: "Términos y condiciones",
            rights: "© 2026 Horizon. Todos los derechos reservados."
        }
    }
};

function getTranslation(language, key) {
    return key.split(".").reduce((value, part) => value?.[part], translations[language]);
}

function setLanguage(language) {
    const selectedLanguage = translations[language] ? language : "en";

    document.documentElement.lang = selectedLanguage === "es" ? "es-419" : "en";

    document.querySelectorAll("[data-i18n]").forEach((element) => {
        const value = getTranslation(selectedLanguage, element.dataset.i18n);

        if (value !== undefined) {
            element.textContent = value;
        }
    });

    document.querySelectorAll("[data-i18n-html]").forEach((element) => {
        const value = getTranslation(selectedLanguage, element.dataset.i18nHtml);

        if (value !== undefined) {
            element.innerHTML = value;
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
        const value = getTranslation(selectedLanguage, element.dataset.i18nPlaceholder);

        if (value !== undefined) {
            element.placeholder = value;
        }
    });

    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
        const value = getTranslation(selectedLanguage, element.dataset.i18nAriaLabel);

        if (value !== undefined) {
            element.setAttribute("aria-label", value);
        }
    });

    document.title = translations[selectedLanguage].meta.title;

    const metaDescription = document.querySelector('meta[name="description"]');

    if (metaDescription) {
        metaDescription.setAttribute(
            "content",
            translations[selectedLanguage].meta.description
        );
    }

    const languageToggle = document.querySelector("[data-language-toggle]");

    if (languageToggle) {
        languageToggle.textContent = "EN / ES";

        languageToggle.setAttribute(
            "aria-label",
            selectedLanguage === "en"
                ? "Change language to Spanish"
                : "Cambiar idioma a inglés"
        );
    }

    localStorage.setItem("ecotrack-language", selectedLanguage);
}

const languageToggle = document.querySelector("[data-language-toggle]");

languageToggle?.addEventListener("click", () => {
    const currentLanguage = document.documentElement.lang.startsWith("es")
        ? "es"
        : "en";

    const nextLanguage = currentLanguage === "en" ? "es" : "en";

    setLanguage(nextLanguage);
});

const savedLanguage = localStorage.getItem("ecotrack-language") || "en";

setLanguage(savedLanguage);