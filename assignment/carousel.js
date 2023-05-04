$(document).ready(function(){
    const items = [
        {id: 0, name:'Iphone14' , imgSrc:"https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437106.jpg?size=626&ext=jpg&ga=GA1.2.455327613.1683220006&semt=ais"},
        {id: 1, name:'Iphone13', imgSrc:"https://img.freepik.com/free-photo/elegant-smartphone-composition_23-2149437072.jpg?size=626&ext=jpg&ga=GA1.1.455327613.1683220006&semt=robertav1_2_sidr"},
        {id: 2, name:"Apple Watch", imgSrc:"https://img.freepik.com/free-photo/smartwatch-screen-digital-device_53876-97321.jpg?size=626&ext=jpg&ga=GA1.1.455327613.1683220006&semt=robertav1_2_sidr"},
        {id: 3, name:'Ipad', imgSrc:"https://img.freepik.com/free-vector/digital-tablet-mockup-brown-table_53876-118309.jpg?size=626&ext=jpg&ga=GA1.2.455327613.1683220006&semt=robertav1_2_sidr"},
        {id: 4, name:'Airpods pro' , imgSrc:"https://img.freepik.com/free-vector/headphones-wireless-realistic-composition-with-isolated-image-phones-with-power-bank-dock-station-with-reflections-vector-illustration_1284-73201.jpg?size=626&ext=jpg&ga=GA1.2.455327613.1683220006&semt=robertav1_2_sidr"}
    ];

    items.forEach((item) =>{
        const itemCard = `
        <div class="item-card" style="background-image:url(${item.imgSrc});background-position:center; background-size:cover; background-repeat:no-repeat">
        <h1 style="color:black">${item.name}</h1>
        </div>        
        `
        $(".carousel").append(itemCard);
    });
    $('.carousel').slick({
        infinite : true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive:[{
            breakpoint: 1000,
            settings:{
                slidesToShow:2
            }
        },
        {
            breakpoint: 680,
            settings:{
                slidesToShow:1
            }
        }           
        ]
    });
})

