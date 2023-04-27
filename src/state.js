import { reactive } from 'vue'

export const state = reactive({
    headerMenu: [
        {
            title: 'Home',
            link: '#site_header'
        },
        {
            title: 'About',
            link: '#testimonial'
        },
        {
            title: 'Services',
            link: '#our_service'
        },
        {
            title: 'Blog',
            link: '#blog'
        },
        {
            title: 'Contact',
            link: '#site_footer'
        },
        {
            title: 'Portfolio',
            link: '#portfolio'
        },
    ],

    footerMenu: [
        {
            title: 'Quick Links',
            subtitle: [
                {
                    item: 'service',
                    link: '#'
                },
                {
                    item: 'Contact',
                    link: '#'
                },
                {
                    item: 'Blog',
                    link: '#'
                },
            ],
        },
        {
            title: 'Resources',
            subtitle: [
                {
                    item: 'Art Design',
                    link: '#'
                },
                {
                    item: 'Computer',
                    link: '#'
                },
                {
                    item: 'News',
                    link: '#'
                },
                {
                    item: 'Networking',
                    link: '#'
                },
                {
                    item: 'Web Security',
                    link: '#'
                },
            ]
        },
        {
            title: 'Contact Us',
            subtitle: [
                {
                    item: 'Address:',
                    link: 'Patricia C.Amedee 4401 Waldeck Street Grapevine Nashville, Tx 76051'
                },
                {
                    item: 'Phone:',
                    link: '+99(0)101 0000 888'
                },
                {
                    item: 'Email:',
                    link: 'info@yourdomain.com'
                }
            ]
        }
    ]
});
