<template lang="pug">
-   
    var info = {
        title: 'Наше решение',
        subtitle1: 'Мы назначаем Клиенту Ведущего персонального юриста и предоставляем проектного юриста в офис заказчика для быстрой и эффективной коммуникации.',
        subtitle2: 'Наша услуга исключает эти риски благодаря уникальности модели взаимодействия:',
        direction: [
            { title: 'Клиент', subtitle: '????' },
            { title: 'Проектный юрист', subtitle: 'Прием и передача информации без искажения. Выполнение задачи технической и частично тактической квалификации' },
            { title: 'Юрист-куратор', subtitle: 'Выполнение задачи стратегической и частично тактической квалификации Курирование проектного юриста' }
        ]
    }

mixin svg(number)       
    if number === 1
        <svg viewBox="0 0 158 203" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M90.182 121.519l-11.355 11.122-11.361-11.122M73.192 127.127l-11.24 55.852 16.872 17.014M84.459 127.127l11.238 55.852-16.87 17.014" stroke="#3CA6CD" stroke-width="4.739" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M109.919 174.295l44.733-9.265-5.914-29.609a29.201 29.201 0 0 0-10.001-16.723c-3.287-2.704-6.617-4.444-9.803-5.146l-25.281-7.341a5.507 5.507 0 0 1-3.938-4.65L98.55 91.556c7.083-5.496 12.316-13.712 14.829-23.308 4.514-.4 7.982-5.42 7.982-11.754 0-5.855-2.94-10.587-6.969-11.597M43.046 44.962c-3.912 1.114-6.748 5.782-6.748 11.533 0 6.328 3.449 11.343 7.954 11.754 2.526 9.588 7.762 17.806 14.835 23.309l-1.154 10.005a5.506 5.506 0 0 1-3.93 4.649l-25.2 7.316c-3.265.718-6.6 2.464-9.882 5.171-5.164 4.266-8.715 10.204-10.004 16.723L3 165.031l40.031 8.289M114.389 44.897S116.479 3 78.82 3C41.162 3 43.046 44.962 43.046 44.962" stroke="#3CA6CD" stroke-width="4.739" stroke-miterlimit="10" stroke-linecap="round"/><path d="M45.728 26.96c1.468-3.008 4.334-5.316 7.476-6.46 5.104-1.854 10.821-.372 15.762 1.884 7.133 3.256 13.362 7.086 21.36 7.967 7.62.84 14.602-.006 21.449-3.495M70.091 56.256h-15.85a2.023 2.023 0 0 1-2.023-2.026v-8.697c0-1.117.905-2.023 2.022-2.023h15.851c1.12 0 2.026.906 2.026 2.023v8.697c0 1.12-.906 2.026-2.026 2.026zM103.404 56.256H87.552a2.023 2.023 0 0 1-2.022-2.026v-8.697c0-1.117.905-2.023 2.022-2.023h15.852c1.116 0 2.022.906 2.022 2.023v8.697c0 1.12-.906 2.026-2.022 2.026zM72.114 48.196H85.53M43.03 43.51l9.185 4.1M105.423 47.61l8.986-4.1" stroke="#3CA6CD" stroke-width="4.739" stroke-miterlimit="10" stroke-linecap="round"/><path d="M99.447 99.221l-20.62 18.466-20.623-18.466M111.764 148.855l23.339-4.391" stroke="#3CA6CD" stroke-width="4.739" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>
    else if number === 2
        <svg viewBox="0 0 199 200" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M68.979 41.89c0 6.962-5.643 12.604-12.603 12.604s-12.603-5.642-12.603-12.603c0-6.959 5.642-12.6 12.603-12.6 6.96 0 12.603 5.641 12.603 12.6zM56.376 65.406V87.05M36.2 91.03v30.173h40.36V91.029" stroke="#3CA6CD" stroke-width="5.007" stroke-miterlimit="10"/><path d="M20.095 121.202v-38.99c0-9.283 4.962-16.806 14.242-16.806h44.084" stroke="#3CA6CD" stroke-width="5.007" stroke-miterlimit="10"/><path d="M78.419 65.406c9.28 0 14.241 7.523 14.241 16.806v38.99M30.29 156.687H20.092l-8.367-20.502a1.687 1.687 0 0 1 1.562-2.325h86.178a1.687 1.687 0 0 1 1.562 2.325l-8.368 20.502H82.464" stroke="#3CA6CD" stroke-width="5.007" stroke-miterlimit="10"/><path d="M82.465 199.544v-51.03c0-.632-.513-1.144-1.145-1.144H31.436c-.632 0-1.145.512-1.145 1.144v51.03" stroke="#3CA6CD" stroke-width="5.007" stroke-miterlimit="10"/><path d="M11.598 54.493V15.934h175.777v102.643h-77.876M189.51 15.934H9.467A6.467 6.467 0 1 1 9.467 3H189.51a6.466 6.466 0 1 1 0 12.934zM81 33.5h91.5m-57 25.5h57m-57 14.5h57m-57 13.5h57" stroke="#3CA6CD" stroke-width="5.007" stroke-miterlimit="10" stroke-linecap="round"/></svg>
    else if number === 3
        <svg viewBox="0 0 258 203" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M80.174 110.451c0-2.488 3.673-41.893 3.673-41.893l26.544-17.372" stroke="#3CA6CD" stroke-width="5.829" stroke-miterlimit="10" stroke-linejoin="round"/><path d="M124.913 89.482l-6.345 20.97" stroke="#3CA6CD" stroke-width="5.829" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M176.999 110.451c0-2.488-3.673-41.893-3.673-41.893l-26.541-17.372" stroke="#3CA6CD" stroke-width="5.829" stroke-miterlimit="10" stroke-linejoin="round"/><path d="M146.785 51.186l-28.416 26.25 6.545 12.045h7.346l6.546-12.045-28.414-26.25M132.262 89.482l6.346 20.97M146.785 94.826h14.19M145.639 23.924C145.639 12.366 138.007 3 128.588 3c-9.418 0-17.05 9.366-17.05 20.924 0 11.563 7.632 20.928 17.05 20.928 9.419 0 17.051-9.365 17.051-20.927z" stroke="#3CA6CD" stroke-width="5.829" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M172.894 68.927l17.839-7.5" stroke="#3CA6CD" stroke-width="5.829" stroke-miterlimit="10" stroke-linejoin="round"/><path d="M202.97 70.052l-12.235-8.625" stroke="#3CA6CD" stroke-width="5.829" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M237.267 110.567c0-1.691-4.236-41.64-4.236-41.64l-17.839-7.5" stroke="#3CA6CD" stroke-width="5.829" stroke-miterlimit="10" stroke-linejoin="round"/><path d="M215.193 61.427l-12.227 8.625v24.774M215.943 36.865c0-8.799-5.809-15.93-12.977-15.93-7.169 0-12.979 7.131-12.979 15.93 0 8.784 5.81 15.937 12.979 15.937 7.168 0 12.977-7.153 12.977-15.937z" stroke="#3CA6CD" stroke-width="5.829" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M84.276 68.927l-17.84-7.5" stroke="#3CA6CD" stroke-width="5.829" stroke-miterlimit="10" stroke-linejoin="round"/><path d="M54.206 70.052l12.23-8.625" stroke="#3CA6CD" stroke-width="5.829" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.884 110.567c0-1.691 4.254-41.64 4.254-41.64l17.843-7.5" stroke="#3CA6CD" stroke-width="5.829" stroke-miterlimit="10" stroke-linejoin="round"/><path d="M41.98 61.427l12.226 8.625v24.774M41.232 36.865c0-8.799 5.81-15.93 12.974-15.93 7.169 0 12.978 7.131 12.978 15.93 0 8.784-5.81 15.937-12.978 15.937-7.165 0-12.974-7.153-12.974-15.937z" stroke="#3CA6CD" stroke-width="5.829" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M232.982 110.47H24.195C12.49 110.47 3 119.953 3 131.648v68.067h43.426v-9.871c0-13.215 10.709-23.921 23.92-23.921h116.485c13.212 0 23.917 10.706 23.917 23.921v9.871h43.426v-68.067c0-11.695-9.49-21.178-21.192-21.178z" stroke="#3CA6CD" stroke-width="5.829" stroke-miterlimit="10"/><path d="M69.045 148.687h119.082" stroke="#3CA6CD" stroke-width="5.829" stroke-miterlimit="10" stroke-linecap="round"/></svg>            

mixin arrow(type)
    if type === 'desktop'
        <svg viewBox="0 0 178 81" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.793 20.988h105.242V1.963A1.95 1.95 0 0 1 118.99 0c.472 0 .897.162 1.237.432L176.948 38.6a1.968 1.968 0 0 1 .525 2.727c-.131.217-.34.379-.541.541l-56.844 38.276a1.966 1.966 0 0 1-3.053-1.631V59.565H11.793c-3.238 0-6.19-1.337-8.324-3.462l-.007-.031A11.683 11.683 0 0 1 0 47.757V32.765c0-3.246 1.321-6.19 3.462-8.346a11.757 11.757 0 0 1 8.33-3.43zm107.197 3.926H11.793a7.847 7.847 0 0 0-7.86 7.85v14.993c0 2.179.881 4.142 2.31 5.564a7.747 7.747 0 0 0 5.55 2.318H118.99c1.09 0 1.971.873 1.971 1.963v17.225l51.381-34.589-51.381-34.597v17.28c0 1.097-.881 1.993-1.971 1.993z" fill="#3CA6CD"/></svg>
    else 
        <svg viewBox="0 0 135 75" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M24.083 0v42.207H1L66.95 72 134 42.207h-25.281V0" stroke="url(#paint0_linear)" stroke-width="4"/><defs><linearGradient id="paint0_linear" x1="67" y1="36" x2="67.5" gradientUnits="userSpaceOnUse"><stop stop-color="#3CA6CD"/><stop offset="1" stop-color="#3CA6CD" stop-opacity="0"/></linearGradient></defs></svg>        

mixin both
    .home-solution__wrap
        .home-solution__title.op-700
            h2= info.title
            h3.lh-n.op-600= info.subtitle1
            p.lh-n= info.subtitle2   
        .home-solution__direction.lh-n
            each item, index in info.direction
                article
                    .images.w-100
                        +svg(index + 1)
                    h2.op-700= item.title
                    h3.op-400= item.subtitle
                    if index !== 2
                        .home-solution__arrow.desk 
                            +arrow('desktop')
                        .home-solution__arrow.mob                                                        


section.home-solution#home-solution
    +both

</template>
