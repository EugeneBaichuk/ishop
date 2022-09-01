import ShopCard from "../Card-item";

export const CardList = () => {
    const cardsInfo = [
        {
            id: 1,
            name: "Гарфи (Garfi)",
            img: "https://dshishatura.ru/wp-content/uploads/1-persidskij-kot-garfi.jpg",
            descr: "Он прославился благодаря своей необычной внешности. В сети Гарфи окрестили самым злым котом в мире. Бросается в глаза его демонический взгляд, мрачный внешний вид и сердитая мордочка."
            },
            {
            id: 2,
            name: "Сэм (Sam)",
            img: "https://img-s3.onedio.com/id-5894eb9ac48c1a6c381d3fa1/rev-0/w-500/h-500/s-8938210c858cfba4529772cfeef15f4d0b9f26f6.webp",
            descr: "Владельцы Сэма нашли его на улице и, несмотря на наличие еще двух питомцев в доме, не смогли его отдать. Сэм выглядит уникально благодаря окрасу шерсти, который образует у него над глазами своего рода брови и придает ему удивленный вид."
            },
            {
            id: 3,
            name: "Венера (Venus)",
            img: "https://img-s3.onedio.com/id-5894ffdd27189dbc60176e3e/rev-0/w-500/h-500/s-b78189126a929601fed509ea79d8ba9bbea8ecde.webp",
            descr: "Нет, вы видите не коллаж из фото двух кошек - это Венера, она химера. В ее организме соединены несколько генов, что объясняет ее двуликий окрас."
            },
            {
            id: 4,
            name: "Лил Баб (Lil Bub)",
            img: "https://img-s3.onedio.com/id-589502bd54d8d21a4bdd5801/rev-0/w-500/h-500/s-b93d4f030affa71e2e2a9d7278555d9562a394a9.webp",
            descr: "Лил, полосатая кошка-карлица, родилась со множеством генетических отклонений: у нее нет зубов, из-за этого всегда высунут язык, пальцев на лапках больше, чем нужно, и скелет устроен так, что она навсегда останется маленького размера. "
            },
            {
            id: 5,
            name: "Grumpy cat",
            img: "https://img-s3.onedio.com/id-5895046454d8d21a4bdd5805/rev-0/w-500/h-500/s-aaae2e3901ccc41c2e855948d0518f8861486fe3.webp",
            descr: "Сердитый кот, хоть и не первый по популярности в Instagram, но наверняка самый популярный в мире. На самом деле Сердитый кот - это Сердитая кошка, и зовут её Тарда."
            },
            {
            id: 6,
            name: "Нала (Nala)",
            img: "https://img-s3.onedio.com/id-58950628e63eaa6c4cd77d98/rev-0/w-500/h-500/s-c65b539f6d0d0be3b3819dd4208c87e02614bfe0.webp",
            descr: "Самая популярная кошка в интернете, смесь сиамской и полосатой пород. Хозяйка взяла Налу из приюта. Главная особенность кошечки - глаза: они голубые, большие и немного косят, что придает ей особый шарм."
            },
            {
            id: 7,
            name: "Вафля (Waffles)",
            img: "https://img-s3.onedio.com/id-5894f7c20c9e477d41ef6343/rev-0/w-500/h-500/s-a653377a5638dbd3ff8bdecdab4bf47b1cace62c.webp",
            descr: "Своим успехом Вафля, шотландский вислоухий кот, обязан хозяевам, именно они одевают его в забавные костюмы и  выкладывают уморительные мемы на страничку своего питомца."
            },
            {
            id: 8,
            name: "Макка (Maccha)",
            img: "https://img-s3.onedio.com/id-5894f34486f017fb564b4163/rev-0/w-500/h-500/s-cc999305d6bf0a6c51bee29e4a0508b7f750034e.webp",
            descr: "Кот по кличке Макка стал популярен не из-за необычной внешности или трагичной истории. Знаменитым его сделали хозяева, которые ежедневно обновляют Instagram Макки забавными фото и видео, которые тут же разлетаются по сети."
            },
            {
            id: 9,
            name: "Бендер (Bender)",
            img: "data:image/jpeg;base64,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",
            descr: "На опубликованном видео, собравшем миллионы просмотров, запечатлен момент того, как раздосадованный Бендер просит еды. Ему не хватило выданной порции, потому он смотрит на хозяйку и вопросительно мяукает, надеясь на добавку."
            },
    ]

    return cardsInfo.map(item => {
        return <ShopCard key={item.id} {...item}/>
    })
    
}