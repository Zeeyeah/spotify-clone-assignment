import React from 'react'

function Footer() {
  return (
    <div className='mt-20 bg-[#121212] px-10'>
<div className='grid grid-cols-5 '>
        <div className='flex flex-col gap-3'>
            <h1 className='text-xl'>Company</h1>
            <h6 className='font-[100]'>About</h6>
            <h6 className='font-[100]'>Jobs</h6>
            <h6 className='font-[100]'>For the Record</h6>
        </div>
        <div className='flex flex-col gap-3'>
            <h1 className='text-xl'>Comunities</h1>
            <h6 className='font-[100]'>For Artists</h6>
            <h6 className='font-[100]'>Developers</h6>
            <h6 className='font-[100]'>Advertising</h6>
            <h6 className='font-[100]'>Investors</h6>
            <h6 className='font-[100]'>Vendors</h6>
        </div>
        <div className='flex flex-col gap-3'>
            <h1 className='text-xl'>Useful links</h1>
            <h6 className='font-[100]'>Support </h6>
            <h6 className='font-[100]'>Free Mobile App</h6>
        </div>
        <div></div>
        <div className='flex justify-evenly'>
            <svg width="35" height="35" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="13.5" cy="13.5" r="13.5" fill="#242424"/>
<path d="M14 7.442C16.136 7.442 16.389 7.451 17.233 7.489C18.013 7.525 18.436 7.655 18.718 7.765C19.066 7.893 19.381 8.097 19.639 8.363C19.905 8.621 20.109 8.936 20.238 9.284C20.348 9.566 20.478 9.99 20.513 10.769C20.552 11.613 20.56 11.866 20.56 14.002C20.56 16.138 20.552 16.391 20.513 17.234C20.478 18.014 20.347 18.438 20.238 18.72C20.1047 19.0648 19.9007 19.3779 19.6393 19.6393C19.3779 19.9007 19.0648 20.1047 18.72 20.238C18.438 20.348 18.014 20.478 17.234 20.513C16.391 20.552 16.137 20.56 14.001 20.56C11.865 20.56 11.611 20.552 10.769 20.513C9.989 20.478 9.565 20.348 9.283 20.238C8.93503 20.1098 8.62029 19.9051 8.362 19.639C8.09603 19.381 7.89134 19.0666 7.763 18.719C7.653 18.437 7.523 18.013 7.488 17.233C7.45 16.389 7.441 16.137 7.441 14.001C7.441 11.865 7.45 11.611 7.488 10.768C7.524 9.988 7.654 9.565 7.763 9.283C7.892 8.935 8.096 8.62 8.362 8.362C8.62028 8.09637 8.93459 7.89174 9.282 7.763C9.565 7.653 9.989 7.523 10.769 7.488C11.612 7.45 11.865 7.441 14.001 7.441L14 7.442ZM14.001 6C11.829 6 11.556 6.01 10.703 6.048C9.849 6.088 9.268 6.224 8.76 6.421C8.22625 6.62214 7.74272 6.9371 7.343 7.344C6.936 7.744 6.621 8.227 6.42 8.761C6.222 9.269 6.087 9.851 6.048 10.703C6.01 11.554 6 11.828 6 14.002C6 16.174 6.01 16.447 6.048 17.3C6.088 18.153 6.222 18.733 6.42 19.241C6.62 19.775 6.936 20.258 7.343 20.658C7.743 21.065 8.226 21.38 8.76 21.581C9.268 21.779 9.85 21.914 10.702 21.953C11.554 21.992 11.828 22.001 14.001 22.001C16.173 22.001 16.446 21.991 17.299 21.953C18.152 21.913 18.732 21.779 19.239 21.581C19.7706 21.3757 20.2534 21.0614 20.6564 20.6584C21.0594 20.2554 21.3737 19.7726 21.579 19.241C21.778 18.733 21.913 18.151 21.952 17.299C21.991 16.448 22 16.174 22 14.001C22 11.828 21.99 11.556 21.952 10.703C21.912 9.85 21.778 9.27 21.58 8.763C21.3791 8.22884 21.0641 7.74492 20.657 7.345C20.2573 6.9381 19.7737 6.62314 19.24 6.422C18.732 6.225 18.15 6.089 17.298 6.051C16.447 6.01 16.173 6.001 14 6.001L14.001 6Z" fill="white"/>
<path d="M14 9.894C12.9105 9.894 11.8656 10.3268 11.0952 11.0972C10.3248 11.8676 9.89197 12.9125 9.89197 14.002C9.89197 15.0915 10.3248 16.1364 11.0952 16.9068C11.8656 17.6772 12.9105 18.11 14 18.11C15.0895 18.11 16.1344 17.6772 16.9048 16.9068C17.6752 16.1364 18.108 15.0915 18.108 14.002C18.108 12.9125 17.6752 11.8676 16.9048 11.0972C16.1344 10.3268 15.0895 9.894 14 9.894ZM14 16.669C13.6453 16.6759 13.2929 16.6119 12.9632 16.481C12.6336 16.35 12.3333 16.1546 12.0801 15.9062C11.8269 15.6579 11.6257 15.3615 11.4884 15.0344C11.351 14.7074 11.2803 14.3562 11.2803 14.0015C11.2803 13.6468 11.351 13.2956 11.4884 12.9686C11.6257 12.6415 11.8269 12.3451 12.0801 12.0968C12.3333 11.8484 12.6336 11.653 12.9632 11.522C13.2929 11.3911 13.6453 11.3271 14 11.334C14.6985 11.3475 15.3638 11.6345 15.8531 12.1333C16.3423 12.6321 16.6163 13.3028 16.6163 14.0015C16.6163 14.7001 16.3423 15.3709 15.8531 15.8697C15.3638 16.3685 14.6985 16.6555 14 16.669ZM18.27 10.691C18.5246 10.691 18.7688 10.5899 18.9488 10.4098C19.1288 10.2298 19.23 9.9856 19.23 9.731C19.23 9.47639 19.1288 9.23221 18.9488 9.05217C18.7688 8.87214 18.5246 8.771 18.27 8.771C18.0154 8.771 17.7712 8.87214 17.5911 9.05217C17.4111 9.23221 17.31 9.47639 17.31 9.731C17.31 9.9856 17.4111 10.2298 17.5911 10.4098C17.7712 10.5899 18.0154 10.691 18.27 10.691Z" fill="white"/>
</svg>

            <svg width="35" height="35" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="13.5" cy="13.5" r="13.5" fill="#242424"/>
<path d="M20.04 9.90534C20.6788 9.53034 21.1542 8.93003 21.373 8.22234C20.7781 8.57915 20.1252 8.82893 19.444 8.96034C19.1641 8.65906 18.825 8.41872 18.448 8.25434C18.0644 8.08492 17.6493 7.99837 17.23 8.00034C16.831 7.99423 16.435 8.06997 16.0664 8.22287C15.6978 8.37577 15.3645 8.6026 15.087 8.88934C14.7998 9.16798 14.5728 9.50251 14.4199 9.87229C14.267 10.2421 14.1915 10.6393 14.198 11.0393C14.198 11.2513 14.225 11.4813 14.278 11.7303C13.0632 11.6732 11.875 11.3554 10.794 10.7983C9.7261 10.2533 8.78499 9.48936 8.032 8.55634C7.76057 9.01792 7.61795 9.54387 7.619 10.0793C7.619 10.5983 7.739 11.0793 7.98 11.5243C8.22 11.9693 8.55 12.3293 8.968 12.6043C8.48621 12.5968 8.01406 12.4682 7.595 12.2303V12.2703C7.595 12.9953 7.825 13.6353 8.285 14.1903C8.72355 14.7331 9.33922 15.1041 10.024 15.2383C9.57973 15.364 9.11208 15.3832 8.659 15.2943C8.84387 15.8951 9.21643 16.4208 9.722 16.7943C10.2308 17.1823 10.8522 17.394 11.492 17.3973C10.4228 18.2526 9.09112 18.7125 7.722 18.6993C7.479 18.6993 7.238 18.6833 7 18.6513C8.38259 19.5525 9.99967 20.0272 11.65 20.0163C12.555 20.0163 13.413 19.8963 14.222 19.6553C15.032 19.4153 15.748 19.0853 16.369 18.6673C16.988 18.2519 17.5533 17.7615 18.052 17.2073C18.552 16.6513 18.963 16.0523 19.286 15.4093C19.6052 14.7762 19.8527 14.1094 20.024 13.4213C20.2236 12.6279 20.3065 11.8097 20.27 10.9923C20.861 10.5645 21.3716 10.0353 21.778 9.42934C21.218 9.67834 20.638 9.83634 20.04 9.90534Z" fill="white"/>
</svg>

           <svg width="35" height="35" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="13.5" cy="13.5" r="13.5" fill="#242424"/>
<path d="M22 12.9987C21.9998 11.47 21.5615 9.97325 20.737 8.68581C19.9126 7.39837 18.7365 6.37412 17.3481 5.73431C15.9596 5.09449 14.4169 4.86592 12.9026 5.07563C11.3882 5.28535 9.9657 5.92458 8.80337 6.91765C7.64104 7.91072 6.7876 9.21604 6.34407 10.6791C5.90054 12.1421 5.88551 13.7016 6.30075 15.1729C6.71599 16.6442 7.54411 17.9658 8.68708 18.981C9.83004 19.9963 11.24 20.6629 12.75 20.9017V15.3117H10.719V12.9987H12.75V11.2357C12.75 9.23074 13.944 8.12374 15.772 8.12374C16.647 8.12374 17.562 8.27974 17.562 8.27974V10.2487H16.554C15.56 10.2487 15.25 10.8657 15.25 11.4987V12.9987H17.469L17.114 15.3117H15.25V20.9017C17.1317 20.6037 18.8454 19.644 20.0827 18.1953C21.32 16.7466 21.9999 14.9039 22 12.9987Z" fill="white"/>
</svg>

        </div>
    </div>
        <div className='h-[1px] my-5 w-full bg-gray'></div>
        <span className=' mt-3 text-sm font-[100]'>© 2024 Spotify AB</span>
    </div>
    
  )
}

export default Footer