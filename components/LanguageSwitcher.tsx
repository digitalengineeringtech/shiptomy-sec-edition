'use client';

import { useIntlApp } from '@/context/IntlProviderWrapper';
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem
} from './ui/select';
import Image from 'next/image';

const locales = [
    { code: 'en', label: 'English', img: "/us.png" },
    { code: 'my', label: 'မြန်မာ', img: "/mm.png" }
];

export default function LanguageSwitcher() {
    const { locale, changeLanguage } = useIntlApp();

    return (
        <div>
            <Select
                value={locale}
                onValueChange={(value) => changeLanguage(value as 'en' | 'my')}
            >
                <SelectTrigger className="flex items-center gap-2 text-xs border rounded-md bg-white shadow-md cursor-pointer px-2 py-1">
                    <SelectValue placeholder="Select language" />
                </SelectTrigger>

                <SelectContent className='z-[10001]'>
                    {locales.map((locale) => (
                        <div key={locale.code} >
                            <SelectItem
                                value={locale.code}
                                className="hover:bg-gray-100 px-2 py-1 flex items-center gap-2"
                            >
                                <Image
                                    src={locale.img}
                                    alt={locale.label}
                                    width={20}
                                    height={20}
                                />
                                {locale.label}
                            </SelectItem>
                        </div>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}
