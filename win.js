const allinke = document.querySelectorAll('a:link');

allinke.forEach(function (link){
    link.addEventListener('click', function(e){
        e.preventDefault();
        const href = link.getAttribute('href');

        if(href=== '#')
            window.scrollTo({
               top: 0,
               behavior:'smooth'

            });

        if(href !== '#' && href.startsWith('#')){
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({behavior:'smooth'});
            console.log(sectionEl);
        }
    })  
})

const sectionHero =  document.querySelector(".section-hero");

const obs = new IntersectionObserver(
    function (entries) {
        const ent = entries[0]

        if(ent.isIntersecting=== false){
            document.body.classList.add("sticky");
        }

        if(ent.isIntersecting=== true){
            document.body.classList.remove("sticky");
        }
    },
    {
        root: null,
        threshold:0,
        rootMargin:"-80px",
    } 
);
obs.observe(sectionHero);