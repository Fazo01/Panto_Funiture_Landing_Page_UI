import { BangUpin,BangUpinBG,IbukSukijan,IbukSukijanBG,MpokIna,MpokInaBG,Fourstar,facebook,twitter,instagram ,Fivestar,SakariasArmchair,BaltsarChain,AnjayChar,NyantuyChair,AddIcon} from "../assets";
import { TestimonialsBG } from '../assets'

export const whyChooseUs=[
    {
        id:'whyChooseUs-1',
        title:'Luxury facilities',
        content:'The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.',
        button:"More Info",
    },
    {
        id:'whyChooseUs-2',
        title:'Affordable Price',
        content:'You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here.',
        button:"More Info",
    },
    {
        id:'whyChooseUs-3',
        title:'Many Choices',
        content:'We provide many unique work space choices so that you can choose the workspace to your liking.',
        button:"More Info",
    },
];
export const SellingProducts=[
    {
        id:1,
        ProductImg:SakariasArmchair,
        chair:'chair',
        ProductName:'Sakarias Armchair',
        _5star:Fivestar,
        DollarSign:'$',
        price:392,
        Icon:AddIcon,
    },
    {
        id:2,
        ProductImg:BaltsarChain,
        chair:'chair',
        ProductName:'Baltsar Chain',
        _5star:Fivestar,
        DollarSign:'$',
        price:299,
        Icon:AddIcon,
    },
    {
        id:3,
        ProductImg:AnjayChar,
        chair:'chair',
        ProductName:'Anjay Chair',
        _5star:Fivestar,
        DollarSign:'$',
        price:519,
        Icon:AddIcon,
    },
    {
        id:4,
        ProductImg:NyantuyChair,
        chair:'chair',
        ProductName:'Nyantuy Chair',
        _5star:Fivestar,
        DollarSign:'$',
        price:921,
        Icon:AddIcon,
    },
]
export const TestimonialsContent=[
    {   
        id:'Testimonials_1',
        img:BangUpin,
        ContentBgImg:TestimonialsBG,
        Background:BangUpinBG,
        name:'Bang Upin',
        full_name:'Pedagang Asongan',
        content:'“Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah“',
        star_img:Fourstar,
    },
    {
        id:'Testimonials_2',
        img:IbukSukijan,
        ContentBgImg:TestimonialsBG,
        Background:IbukSukijanBG,
        name:'Ibuk Sukijan',
        full_name:'Ibu Rumah Tangga',
        content:'“Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah“',
        star_img:Fourstar,
    },
    {   
        
        id:'Testimonials_3',
        Background:MpokInaBG,
        ContentBgImg:TestimonialsBG,
        img:MpokIna,
        name:'Mpok Ina',
        full_name:'Karyawan Swasta',
        content:'“Makasih Panto, aku sekarang berasa tinggal di apartment karena barang-barang yang terlihat mewah“',
        star_img:Fourstar,
    },
];
export const FooterLinks=[
    {
        title:"Services",
        Links:[
            
            {
                name:"Email Marketing",
            },
            {
                name:"Campaigns",
            },
            {
                name:"Branding",
            },
        ],
    },
    {
        title:"Furniture",
        Links:[
            {
                name:"Beds",
            },
            {
                name:"Chair",
            },
            {
                name:"All",
            },
        ],
    },
]
export const FollowUs=[
    {
    
        title:"Follow Us",
        Links:[
            {
                icons:facebook,
                name:"Facebook",
            },
            {
                icons:twitter,
                name:"Twitter",
            },
            {
                icons:instagram,
                name:"Instagram",
            },
        ],
        
    },
]