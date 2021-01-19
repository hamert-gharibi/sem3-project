

const toggleButton = document.getElementsByClassName('toggleButton')[0]
        const navbarLinks = document.getElementsByClassName('menu')[0]
    

        toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('show')
        console.log(navbarLinks.classList);
        })


        