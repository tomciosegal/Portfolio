AOS.init();

            document.addEventListener('scroll', function(){
                const startHeight = document.querySelector('.portfolio-intro').offsetTop;
                const scrollTop = window.scrollY;
                const navbar = document.querySelector('#navbar');

                if(scrollTop > startHeight){
                    navbar.classList.add('custom-navbar');
                }
                else{
                    navbar.classList.remove('custom-navbar');
                }
            })

            document.querySelector('.main-circle').addEventListener('mouseover', function(){
                for(circle of document.querySelectorAll('.small-circle')){
                    circle.style.opacity = 1;
                }
            })

            document.querySelector('#scroll').addEventListener('click', e => {
                e.preventDefault();
                window.scroll({
                    behavior: 'smooth',
                    left: 0,
                    top: document.querySelector('#work_so_far').offsetTop
                })
            })

            // document.querySelector('.main-circle').addEventListener('mouseout', function(){
            //     for(circle of document.querySelectorAll('.small-circle')){
            //         circle.style.opacity = 0;
            //     }
            // })

        //     const spins = document.querySelectorAll('.hexagon')
        //         for(let spin of spins){
        //             spin.addEventListener('mouseover', rotateIn)
        //             spin.addEventListener('mouseout', rotateOut)
        // }

        //      function rotateIn(){
        //         for(let spin of spins){
        //             spin.style.background='#6f176f'
        //         }
        //         this.style.background='red'  
        // }

        //     function rotateOut(){
        //         for(let spin of spins){
        //             spin.style.background='#6f176f'
        //         }
        // }

