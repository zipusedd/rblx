document.addEventListener('DOMContentLoaded', () => {
    const userId = '43196922'; // Replace with your Roblox user ID
    const avatarImage = document.getElementById('avatar-image');
    const lastOnline = document.getElementById('last-online');

    // Function to fetch and display Roblox user data
    async function fetchUserData() {
        try {
            const response = await fetch(`https://api.roblox.com/users/${43196922}`);
            const data = await response.json();

            if (data) {
                // Set avatar image
                avatarImage.src = `https://www.roblox.com/headshot-thumbnail/image?userId=${userId}&width=150&height=150&format=png`;

                // Set last online
                const lastOnlineDate = new Date(data.LastOnline);
                lastOnline.textContent = `Last online: ${lastOnlineDate.toLocaleString()}`;
            } else {
                lastOnline.textContent = 'User data not found.';
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
            lastOnline.textContent = 'Error fetching user data.';
        }
    }

    fetchUserData();
});
