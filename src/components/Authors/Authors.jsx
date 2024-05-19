import React, { useState } from 'react'


const AuthorsList=[
    {
        name:"Joseph Murphy",
        img:"https://th.bing.com/th?id=OIP.LvM09meDU1LoYyMHgqNgOAAAAA&w=212&h=294&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
         books:[
            {title:"Power of your subconcious mind", bookImg:"https://tse1.mm.bing.net/th?id=OIP.iYlBtb3ygCjEJfGAcgi5cwHaLh&pid=Api&P=0&h=180"},
            {title:"Believe in Yourself", bookImg:"https://tse4.mm.bing.net/th?id=OIP.W7L7ljuftx02UWbbd3RoHAHaHa&pid=Api&P=0&h=180"}
        ]
    },
    {
        name:"James Clear",
        img:"https://th.bing.com/th/id/OIP.k7yyod7nZYFHJZzUWWqHYgHaIT?w=146&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
         books:[
            {title:"Atomic Habits", bookImg:"https://th.bing.com/th/id/OIP.y6Qzu_SIv6JuZz1UGksx3gHaIk?w=164&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
            
        ]
    },
    {
        name:"Robert T.Kiyosaki",
        img:"https://th.bing.com/th/id/OIP.QD4BWw22BuzTT-Bv0MuG0gHaEK?w=302&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
         books:[
            {title:"Rich Dad poor Dad", bookImg:"https://th.bing.com/th/id/OIP.-kFbJ3sSEfk8NqSaV-JFIwHaLO?w=117&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
            {title:"Rich Dad's Retire Young, Retire Rich",bookImg:"https://th.bing.com/th/id/OIP.MPYbNd-mvPPhbhbDgGaTHQHaMG?w=195&h=319&c=7&r=0&o=5&dpr=1.3&pid=1.7"}
            
        ]
    },
    {
        name:"Mark manson",
        img:"https://th.bing.com/th?id=OIP.bJ2nJ7QmwhnPnoblAAZedwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
         books:[
            {title:"Subtle Art of not giving a F*ck", bookImg:"https://th.bing.com/th/id/OIP.2oSAsLprWg9L17YnE2uIgQHaHa?w=148&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
            
        ]
    },
    {
        name:"Ishan Sharma",
        img:"https://th.bing.com/th/id/OIP.6ECRCa7A8U5WGzDoWHQEvgHaEK?w=280&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
         books:[
            {title:"Crush IT on LinkedIn", bookImg:"https://th.bing.com/th/id/OIP.YE6eObn_2xgEpe-VY4fxOgHaD4?w=313&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"},
            {title:"Unlocking Unicorn Secrets",bookImg:"https://th.bing.com/th/id/OIP.SpsfmJAtrZgEUssJL9jUfgHaLX?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"}
            
        ]
    },
    
    
];

function Authors() {
    const [selectedAuthor,setSelectedAuthor]=useState(null);
    const[selectedAuthorBooks,setSelectedAuthorBooks]=useState([]);

    const handleAuthorClick=(author)=>{
        setSelectedAuthor(author);
        setSelectedAuthorBooks(author.books);
    }
  return (
    <>
    <div data-aos="zoom-in" className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
        
        <div className='text-center mb-20 max-w-[400px] mx-auto'>
                    <p
                    className='text-sm bg-clip-text
                    text-transparent bg-gradient-to-r
                    from-primary to-secondary'>Authors & Books</p>
                    <h1 className='text-3xl font-bold'>Authors</h1>
                </div>

                {/* card section */}
                <div className='flex justify-around flex-wrap grid grid-cols-2 sm:grid-cols-3
                md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
                    {AuthorsList.map((author)=>(
                        <div className="">
                                <button className='block w-full h-full rounded-md overflow-hidden shadow-md hover:shadow-lg' 
                                onClick={()=>handleAuthorClick(author)}>
                                    <img src={author.img}  className='h-[220px] w-[150px] object-cover rounded-md'/>
                                    <h3 className='font-semibold dark:text-white'>{author.name}</h3>
                                </button>

                                {selectedAuthor === author && (
                                    <div className='mt-2 bg-white rounded-xl shadow-md absolute z-10'>
                                    <ul className="mt-2 max-h-60 overflow-y-auto dark:bg-gray-900 dark:text-white duration-200">
                                        {
                                            selectedAuthorBooks.map((book)=>(
                                                <li className="flex items-center py-2">
                                                    <img src={book.bookImg} className="w-12 h-12 rounded-full mr-4"/>
                                                    <span className='font-semibold'>{book.title}</span>
                                                </li>

                                            ))
                                        }
                                    </ul>
                                    </div>
                                )}
                        </div>
                    ))}
                </div>
    </div>
    </>
  )
}

export default Authors;
