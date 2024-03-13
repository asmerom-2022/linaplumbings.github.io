document.addEventListener('DOMContentLoaded', function() {
    const storyContent = document.getElementById('story-content');

    // Sample data (replace with your own)
    const storyData = [
        {
            image: 'assets/img_12.jpg',
            heading: 'Our Beginning',
            text: 'It all began in a small garage in 2018. John Smith, a recent graduate with a passion for mechanics and a knack for fixing things, started Sureflow Plumbing. Armed with a toolbox, a pickup truck, and an unwavering work ethic, John set out to tackle the leaky faucets and clogged drains of his community. His dedication to quality service and fair pricing quickly earned him a loyal clientele.'
        },
        {
            image: 'assets/img_11.jpg',
            heading: 'Our Growth',
            text: 'Word of Johns expertise spread like wildfire. Soon, he was no longer a one-man operation. He hired his first apprentice, Tom, who shared his commitment to customer satisfaction. Together, they tackled more complex projects, from installing new heating systems to repairing burst pipes. Their reputation for reliability and expertise cemented Sureflows place as a trusted name in the community.',

            'Facing Challenges and Embracing Innovation (2020)':
            
            'The new millennium brought new challenges. Technological advancements in energy-efficient heating systems and eco-friendly plumbing practices demanded a shift. John and Tom embraced these changes, investing in training and acquiring certifications in the latest technologies. Sureflow became known as a company that not only fixed problems but also offered preventative solutions and energy-saving options.'
        },
        {
            image: 'assets/img_10.jpg',
            heading: 'Our Mission',
            text: 'Sureflow Plumbings mission extends beyond fixing leaky faucets and maintaining comfortable homes. They strive to be environmental stewards, promoting sustainable practices and offering eco-friendly plumbing solutions. Their vision is to be the go-to choice for reliable, efficient, and environmentally conscious plumbing and heating services in the region.'
        }
    ];

    // Function to populate story content
    function populateStory() {
        storyData.forEach(item => {
            const storyItem = document.createElement('div');
            storyItem.classList.add('story-item');

            const image = document.createElement('img');
            image.src = item.image;

            const heading = document.createElement('h3');
            heading.textContent = item.heading;

            const text = document.createElement('p');
            text.textContent = item.text;

            storyItem.appendChild(image);
            storyItem.appendChild(heading);
            storyItem.appendChild(text);

            storyContent.appendChild(storyItem);
        });
    }

    // Call the function to populate story content
    populateStory();
});


// for gallarey in about us
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.gallery img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('close-btn');

    images.forEach(img => {
        img.addEventListener('click', function() {
            lightbox.style.display = 'block';
            lightboxImg.src = this.src;
        });
    });

    closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });
});


