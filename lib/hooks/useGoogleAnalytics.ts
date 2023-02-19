import { useEffect } from 'react'
import ReactGA from 'react-ga4'
import { UaEventOptions } from 'react-ga4/types/ga4'

const useGoogleAnalytics = () => {
    useEffect(() => {
        ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_UA ?? '')
        console.log(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_UA)

        ReactGA.send({ hitType: 'pageview', page: window?.location.href })
    }, [])

    const trackEvent = (prop: UaEventOptions) => {
        ReactGA.event({ ...prop })
    }

    return {
        trackEvent,
    }
}

export { useGoogleAnalytics }
