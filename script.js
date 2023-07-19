//sidebar

const menuItems =document.querySelectorAll('.menu-item');
const messagesNotification=document.querySelector('#messages-notifications')
const messagesBox=document.querySelector('.messages')
const message=messagesBox.querySelectorAll('.message ')
const messageSearchBox=document.querySelector('#message-search')

//theme
const theme=document.querySelector('#theme')
const themeModel=document.querySelector('.customize-theme')
const fontSize=document.querySelectorAll('.choose-size span')
let root=document.querySelector(':root')
const colorPalette=document.querySelectorAll('.choose-color span')
const bg1=document.querySelector('.bg-1')
const bg2=document.querySelector('.bg-2')
const bg3=document.querySelector('.bg-3')














const changeActiveClass=()=>
{
    menuItems.forEach(item=>{
        item.classList.remove('active');
    })
}

menuItems.forEach(item=>{
    item.addEventListener('click',()=>{
        changeActiveClass()
        item.classList.add('active');

        if (item.id != 'notifications') {
            document.querySelector('.notification-popup').style.display = 'none';
        }
        else
        {
            document.querySelector('.notification-popup').style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display='none';
        }

    }) 
})

//? search functionality

const searchMessage=()=>{
    const val=messageSearchBox.value.toLowerCase();
    message.forEach(user =>{
        let name=user.querySelector('h5').textContent.toLowerCase()
        if(name.indexOf(val)!=-1)
        {
            user.style.display = 'flex';
        }
        else
        {
            user.style.display='none';
        }

    })
}

messageSearchBox.addEventListener('keyup',searchMessage)

//?highlight message box when message button is clicked

messagesNotification.addEventListener('click',()=>{
    document.querySelector('#messages-notifications small').style.display='none';
    messagesBox.style.boxShadow = '0 0 1rem var(--color-primary)'
    setTimeout(() => {
        messagesBox.style.boxShadow='none'; 
    }, 3000);

})


//?theme functionality start form here

//!open theme model
const openThemeModel=()=>
{
    themeModel.style.display='grid';
}

//!close theme model
const closeThemeModel=(e)=>
{
    if(e.target.classList.contains('customize-theme'))
    {
        themeModel.style.display='none';
    }
} 

themeModel.addEventListener('click',closeThemeModel)
theme.addEventListener('click',openThemeModel)



//?font functionality start form here


//!remove active class from span
const removeSizeSelector=()=>
{
    fontSize.forEach(size=>{
        size.classList.remove('active')
    })
}


fontSize.forEach(size =>{

    size.addEventListener('click',()=>{

        removeSizeSelector()
        let fontSize;
        size.classList.toggle('active')

        if (size.classList.contains('font-size-1')) {
            fontSize ='10px';
            root.style.setProperty('--sticky-top-left','5.4rem')
            root.style.setProperty('--sticky-top-right','5.4rem')
        }
        else if (size.classList.contains('font-size-2'))
        {
            fontSize='12px';
            root.style.setProperty('--sticky-top-left','5.4rem')
            root.style.setProperty('--sticky-top-right','-7rem')
        }
        else if (size.classList.contains('font-size-3'))
        {
            fontSize='15px';
            root.style.setProperty('--sticky-top-left','-2rem')
            root.style.setProperty('--sticky-top-right','-17rem')
        }
        else if (size.classList.contains('font-size-4'))
        {
            fontSize='17px';
            root.style.setProperty('--sticky-top-left','-5rem')
            root.style.setProperty('--sticky-top-right','-25rem')
        }
        else if (size.classList.contains('font-size-5'))
        {
            fontSize='19px';
            root.style.setProperty('--sticky-top-left','-12rem')
            root.style.setProperty('--sticky-top-right','-35rem')
        }
    
        document.querySelector('html').style.fontSize=fontSize

    })
   
})


//?color palette functionality start form here


const changeActiveColorClass=()=>
{
    colorPalette.forEach(colorPalette=>{
        colorPalette.classList.remove('active')
    })
}


//!change primary color
colorPalette.forEach(color=>{

    color.addEventListener('click',()=>{
        let primaryHue
        changeActiveColorClass()
        color.classList.toggle('active')
        if (color.classList.contains('color-1')){
            primaryHue=252
        }
        else if (color.classList.contains('color-2')){
            primaryHue=52
        }
        else if (color.classList.contains('color-3')){
            primaryHue=352
        }
        else if (color.classList.contains('color-4')){
            primaryHue=152
        }
        else if (color.classList.contains('color-5')){
            primaryHue=202
        }

        root.style.setProperty('--color-primary-hue',primaryHue)


    })
})

let lightColorLightness
let whiteColorLightness
let darkColorLightness

const changeBG=()=>
{
    root.style.setProperty('--dark-color-lightness',darkColorLightness)
    root.style.setProperty('--light-color-lightness',lightColorLightness)
    root.style.setProperty('--white-color-lightness',whiteColorLightness)
}

bg1.addEventListener('click',() => {

    darkColorLightness='17%'
    whiteColorLightness='95%'
    lightColorLightness='100%'

    bg1.classList.add('active')

    bg2.classList.remove('active')
    bg3.classList.remove('active')
    changeBG()

})

bg2.addEventListener('click',() => {

    darkColorLightness='95%'
    whiteColorLightness='20%'
    lightColorLightness='15%'

    bg2.classList.add('active')

    bg1.classList.remove('active')
    bg3.classList.remove('active')
    changeBG()

})

bg3.addEventListener('click',() => {

    darkColorLightness='95%'
    whiteColorLightness='10%'
    lightColorLightness='0%'

    bg3.classList.add('active')

    bg1.classList.remove('active')
    bg2.classList.remove('active')
    changeBG()

})
