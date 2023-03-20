import styles from './ScrollBtn.module.css';

import { useCallback, useEffect, useState } from 'react';

export default function ScrollBtn() {

    const [showScroll, setShowScroll] = useState(false);

    const checkScrollTop = useCallback(() => {
        if (!showScroll && window.pageYOffset > 400) {
            setShowScroll(true)
        } else if (showScroll && window.pageYOffset <= 400) {
            setShowScroll(false)
        }
    }, [showScroll]);

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
    }, [checkScrollTop]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (!showScroll) {
        return null;
    }

    return (
        <button className={styles['scroll-button']} onClick={scrollToTop}>
            <i className="fa-solid fa-chevron-up" />
        </button>
    )
}