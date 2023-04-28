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

    carouselItems: [
        {
            image: '84316050-0af0-49db-a53a-241d47ddad0e-2-790x576.jpg',
            title: 'Basket of flower on table',
            description: 'Branding Strategy',
        },
        {
            image: 'DRY-1-790x576.jpg',
            title: 'Basket of flower on table2',
            description: 'Branding Strategy2',
        },
        {
            image: '8wa60okr-1-790x576.jpg',
            title: 'Basket of flower on table3',
            description: 'Branding Strategy3',
        },
        {
            image: 'a247b00b-3621-470f-b4b8-b3ac46f25907-1-790x576.jpg',
            title: 'Basket of flower on table4',
            description: 'Branding Strategy4',
        },
    ],

    footerMenuTop: [
        {
            title: 'Quick Links',
            subtitle: [
                {
                    item: 'Services',
                    link: '#'
                },
                {
                    item: 'Contact',
                    link: '#'
                },
                {
                    item: 'Blog',
                    link: '#'
                }
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
                    info: 'Patricia C.Amedee 4401 Waldeck Street Grapevine Nashville, Tx 76051'
                },
                {
                    item: 'Phone:',
                    info: '+99(0)101 0000 888'
                },
                {
                    item: 'Email:',
                    info: 'info@yourdomain.com'
                }
            ]
        }
    ],
    footerMenuBottom: [
        {
            copy: '© 2023 Phlox All Rights Reserved'
        },
        {
            icon: 'fa-brands fa-instagram',
            link: '#'
        },
        {
            icon: 'fa-brands fa-linkedin-in',
            link: '#'
        },
        {
            icon: 'fa-brands fa-facebook-f',
            link: '#'
        },
        {
            icon: 'fa-brands fa-twitter',
            link: '#'
        },
    ]
});
