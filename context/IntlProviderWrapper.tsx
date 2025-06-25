'use client';

import { IntlProvider } from 'next-intl';
import { createContext, ReactNode, useContext, useState } from 'react';
import enMessages from '../messages/en.json';
import myMessages from '../messages/my.json';

const messagesMap = {
    en: enMessages,
    my: myMessages
};

type IntlContextType = {
    locale: 'en' | 'my';
    changeLanguage: (lng: 'en' | 'my') => void;
};

const IntlContext = createContext<IntlContextType | null>(null);

export const useIntlApp = () => {
    const context = useContext(IntlContext);
    if (!context) {
        throw new Error('useIntlApp must be used within IntlProviderWrapper');
    }
    return context;
};

export const IntlProviderWrapper = ({ children }: { children: ReactNode }) => {
    const [locale, setLocale] = useState<'en' | 'my'>('en');

    const changeLanguage = (lng: 'en' | 'my') => {
        setLocale(lng);
    };

    console.log(locale, "lllllllllll")

    return (
        <IntlContext.Provider value={{ locale, changeLanguage }}>
            <IntlProvider
                key={locale}
                locale={locale}
                messages={messagesMap[locale]}
                timeZone="Asia/Yangon"
            >
                {children}
            </IntlProvider>
        </IntlContext.Provider>
    );
};
