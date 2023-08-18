window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY

    const headerLayout = document.getElementById('headerLayout')
    const linksLayout1 = document.getElementById('linksLayout1')
    const linksLayout2 = document.getElementById('linksLayout2')
    const linksLayout3 = document.getElementById('linksLayout3')

    if(scrollTop > 30) {
        headerLayout.classList.add('bg-blue-900')

        linksLayout1.classList.remove('hover:bg-slate-500')
        linksLayout1.classList.add('hover:bg-gray-900')
        linksLayout2.classList.remove('hover:bg-slate-500')
        linksLayout2.classList.add('hover:bg-gray-900')
        linksLayout3.classList.remove('hover:bg-slate-500')
        linksLayout3.classList.add('hover:bg-gray-900')
    } else {
        headerLayout.classList.remove('bg-blue-900')

        linksLayout1.classList.add('hover:bg-slate-500')
        linksLayout1.classList.remove('hover:bg-gray-900')
        linksLayout2.classList.add('hover:bg-slate-500')
        linksLayout2.classList.remove('hover:bg-gray-900')
        linksLayout3.classList.add('hover:bg-slate-500')
        linksLayout3.classList.remove('hover:bg-gray-900')
    }

    const QSTitle = document.getElementById('QSTitle')
    const QSVideo = document.getElementById('QSVideo')
    const QSContent = document.getElementById('QSContent')

    if (scrollTop < 300) {
        QSTitle.classList.add('opacity-0')
        QSTitle.classList.add('translate-y-5')
    } else {
        QSTitle.classList.remove('opacity-0')
        QSTitle.classList.remove('translate-y-5')
    }

    if (scrollTop < 330) {
        QSVideo.classList.add('opacity-0')
        QSVideo.classList.add('translate-y-5')
    } else {
        QSVideo.classList.remove('opacity-0')
        QSVideo.classList.remove('translate-y-5')
    }

    if (scrollTop < 360) {
        QSContent.classList.add('opacity-0')
        QSContent.classList.add('translate-y-5')
    } else {
        QSContent.classList.remove('opacity-0')
        QSContent.classList.remove('translate-y-5')
    }

    const mision = document.getElementById('mision')
    const vision = document.getElementById('vision')

    if (scrollTop > 750) {
        mision.classList.remove('opacity-0')
        mision.classList.remove('translate-y-3')
    } else {
        mision.classList.add('translate-y-3')
        mision.classList.add('opacity-0')
    }

    if (scrollTop > 780) {
        vision.classList.remove('opacity-0')
        vision.classList.remove('translate-y-3')
    } else {
        vision.classList.add('translate-y-3')
        vision.classList.add('opacity-0')
    }
})

const btnNav = document.getElementById('btnNavBarResponsive')
const navResponsive = document.getElementById('navResponsive')
const line1 = document.getElementById('line1')
const line2 = document.getElementById('line2')
const line3 = document.getElementById('line3')

btnNav.addEventListener('click', () => {
    line1.classList.toggle('rotate-45')
    line1.classList.toggle('translate-y-[7px]')

    line2.classList.toggle('translate-x-[-5px]')
    line2.classList.toggle('opacity-0')

    line3.classList.toggle('-rotate-45')
    line3.classList.toggle('translate-y-[-7px]')

    navResponsive.classList.toggle('max-md:top-[-100vh]')
    navResponsive.classList.toggle('max-md:top-[0]')

    document.getElementById('html').classList.toggle('overflow-hidden')
})