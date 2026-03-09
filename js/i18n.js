const i18n = (() => {
    let currentLang = 'he';

    const translations = {
        he: {
            meta: {
                title: 'המטבח התאילנדי — מתכונים אותנטיים',
                description: 'המטבח התאילנדי — מתכונים אותנטיים מתאילנד, בעברית.'
            },
            header: {
                logo: 'המטבח התאילנדי',
                backToRecipes: 'חזרה למתכונים'
            },
            hero: {
                title: 'המטבח',
                titleHighlight: 'התאילנדי',
                subtitle: 'מתכונים אותנטיים מהלב של בנגקוק',
                searchPlaceholder: 'חיפוש מתכון...'
            },
            categories: {
                all: 'הכל',
                curries: 'קארי',
                'stir-fries': 'מוקפץ',
                soups: 'מרקים',
                'street-food': 'אוכל רחוב',
                desserts: 'קינוחים'
            },
            difficulty: {
                easy: 'קל',
                medium: 'בינוני',
                hard: 'מאתגר',
                קל: 'קל',
                בינוני: 'בינוני',
                מאתגר: 'מאתגר'
            },
            detail: {
                prepTime: 'זמן הכנה',
                cookTime: 'זמן בישול',
                servings: 'מנות',
                difficulty: 'רמת קושי',
                ingredients: 'מצרכים',
                instructions: 'הוראות הכנה',
                categories: 'קטגוריות',
                whatsappShare: 'שלח רשימת קניות ב-WhatsApp',
                minutes: 'דקות'
            },
            search: {
                noResults: 'לא נמצאו מתכונים',
                tryAgain: 'נסו לשנות את מילות החיפוש או לבחור קטגוריה אחרת',
                clearFilters: 'נקה חיפוש',
                resultsCount: 'נמצאו {count} מתכונים'
            },
            loading: 'טוען מתכונים...',
            footer: {
                tagline: 'המטבח התאילנדי — מתכונים אותנטיים מתאילנד, בעברית',
                backToHub: 'לעוד מתכוני עולם — חזרה לרכזת המתכונים'
            }
        },
        en: {
            meta: {
                title: 'Thai Kitchen — Authentic Recipes',
                description: 'Thai Kitchen — Authentic Thai recipes in English and Hebrew.'
            },
            header: {
                logo: 'Thai Kitchen',
                backToRecipes: 'Back to Recipes'
            },
            hero: {
                title: 'Thai',
                titleHighlight: 'Kitchen',
                subtitle: 'Authentic recipes from the heart of Bangkok',
                searchPlaceholder: 'Search recipe...'
            },
            categories: {
                all: 'All',
                curries: 'Curries',
                'stir-fries': 'Stir-fries',
                soups: 'Soups',
                'street-food': 'Street Food',
                desserts: 'Desserts'
            },
            difficulty: {
                easy: 'Easy',
                medium: 'Medium',
                hard: 'Hard',
                קל: 'Easy',
                בינוני: 'Medium',
                מאתגר: 'Hard'
            },
            detail: {
                prepTime: 'Prep Time',
                cookTime: 'Cook Time',
                servings: 'Servings',
                difficulty: 'Difficulty',
                ingredients: 'Ingredients',
                instructions: 'Instructions',
                categories: 'Categories',
                whatsappShare: 'Share shopping list on WhatsApp',
                minutes: 'minutes'
            },
            search: {
                noResults: 'No recipes found',
                tryAgain: 'Try different search terms or select another category',
                clearFilters: 'Clear search',
                resultsCount: 'Found {count} recipes'
            },
            loading: 'Loading recipes...',
            footer: {
                tagline: 'Thai Kitchen — Authentic recipes from Thailand',
                backToHub: 'More world recipes — Back to Recipe Hub'
            }
        }
    };

    function t(key) {
        const keys = key.split('.');
        let value = translations[currentLang];

        for (const k of keys) {
            if (value && typeof value === 'object') {
                value = value[k];
            } else {
                console.warn(`Translation key not found: ${key}`);
                return key;
            }
        }

        return value || key;
    }

    function setLanguage(lang) {
        if (!translations[lang]) {
            console.error(`Language not supported: ${lang}`);
            return;
        }
        currentLang = lang;
    }

    function getLanguage() {
        return currentLang;
    }

    function detectLanguage() {
        const saved = localStorage.getItem('lang');
        if (saved && translations[saved]) {
            return saved;
        }

        const browserLang = navigator.language || navigator.userLanguage;
        if (browserLang.startsWith('he')) return 'he';
        return 'en';
    }

    function init() {
        const detectedLang = detectLanguage();
        setLanguage(detectedLang);
        return detectedLang;
    }

    return {
        t,
        setLanguage,
        getLanguage,
        detectLanguage,
        init
    };
})();
