var projects = [
    {
        name : 'Pictance',
        introduction : 'Face recognition using neural networks.',
        thumbnail : 'pictance.png',
        summary : 'Face recognition using neural networks on a web app.',
        status : 'In progress.',
        description : ['The user can upload a photo of their face to the web app by using their browser. The most important features of the face will be identified and marked on the photo.'],
        images : ['hexapod1.jpg','hexapod2.jpg'],
        month : 8,
        year : 2018
    },
    {
        name : 'Kotlinbots Hexapod',
        video : '<iframe width="640" height="360" src="https://youtube.com/embed/LTkxGlqgI2w" frameborder="0" allowfullscreen=""></iframe>',
        introduction : 'Android can also be used to program robots!',
        thumbnail : 'hexapod.png',
        summary : 'In this project I’m programming an hexapod robot using Android Things running on a Raspberry Pi.',
        status : 'In progress.',
        description : ['Android Things can be installed on a Raspberry Pi and other devices and it let us program robots as if we are programming mobile apps, using Java and now Kotlin.','Thanks to this we can easily capture images with the camera, use a Firebase database to store the images and later retrieve them in a phone app, and even use Cloud Vision API to analyze the contents of the images.'],
        images : ['hexapod1.jpg','hexapod2.jpg'],
        month : 7,
        year : 2018
    },
    {
        name : 'Tango',
        introduction : 'Switch between the virtual world and the real world thanks to Tango.',
        thumbnail : 'default.png',
        summary : 'Tools: Tango Device + Unity',
        status : 'In progress.',
        description : ['Using the new Tango device, the goal of this project is to use all the features that it bring to us; with this device, you will be able to look at an object that is not in there and you will be able to switch between virtual world and real world.'],
        images : [],
        month : 6,
        year : 2017
    },
    {
        name : 'TJBot',
        introduction : 'TJBot can dance, respond to emotions and engage into conversation with the service that Watso...',
        thumbnail : 'default.png',
        summary : 'TJBot can dance, respond to emotions and engage into conversation with the service that Watson offers.',
        status : 'In progress.',
        description : ['TJBot, or Larry, as we call him, can dance to any song with its little arm and respond to different emotions almost as well as it can engage into conversation with the text to speech service that Watson offers. It can look through a Twitter feed to indicate the general opinion on an specific word of subject that he hears, through an LED, or come up with a color after being asked for it. He was inspired by an IBM open source project that involves a Raspberry Pi 3, a servo motor, a RGB LED, a microphone, speaker, Node JS, and Watson Services to make it a really interesting experience that we are currently working on some improvements to give it a little bit of a Guatemalan twist, but do not worry, we will be keeping you posted!'],
        images : ['ilstyle1.png','ilstyle2.png'],
        month : 6,
        year : 2017
    },
    {
        name : 'ILStyle',
        introduction : 'Style Transfer of famous paintings to photos, with NodeJS + TensorFlow.',
        thumbnail : 'ilstyle.png',
        summary : 'Style Transfer of famous paintings to photos, with NodeJS + TensorFlow + FireBase + ReactJS + React Native.',
        status : 'Finished, improvements are being made.',
        description : ['On the mobile app take a photo and send it to FireBase, then the Node Server download the picture and calls the Style Transfer that applies the paintings style to the photo, then are showed in a web app, the photos can be send through email.'],
        images : ['ilstyle1.png','ilstyle2.png'],
        month : 6,
        year : 2017
    },
    {
        name : 'ILVision',
        introduction : 'Recognizing faces and drawing on face elements, with NodeJS + Google Cloud Vision API + React...',
        thumbnail : 'default.png',
        summary : 'Face Recognition draw figures on face elements, with NodeJS + Google Cloud Vision API + React Native.',
        status : 'In progress.',
        description : ['On the mobile app take a photo, send it to Google Cloud Vision API, found coordinates of face elements and draw it on the photo and show it on the App.ss.'],
        images : [],
        month : 3,
        year : 2017
    },
    {
        name : 'ILDrone',
        introduction : 'Drone Flight Controller, with Intel Edison + ArDrone 2.0 + NodeJS + Johhny-Five.',
        thumbnail : 'ildrone.jpg',
        summary : 'Drone Flight Controller, with Intel Edison + ArDrone 2.0 + NodeJS + Johhny-Five.',
        status : 'Finished, improvements are being made.',
        description : ['Aims to control a drone with a more natural interface, is a gauntlet that reads the hand movement and send flight commands to the Drone, that controls the Drone movement to the right, left, forward and backward. Buttons in the fingers, that are pressed with the thumb, the other functions are called TakeOff, Land, Hover, rotate clockwise and reverse clockwise.'],
        images : ['ildrone1.jpg','ildrone2.jpg','ildrone3.jpg'],
        month : 10,
        year : 2016
    },
    {
        name : 'OBDled',
        video : '<iframe width="640" height="360" src="https://www.youtube.com/embed/DE5WhKwGWoQ" frameborder="0" allowfullscreen=""></iframe>',
        introduction : 'Controlling LED strips according to the RPM of the car using Arduino.',
        thumbnail : 'obd.jpg',
        summary : 'In this project I’m reading the RPM (and speed if I were moving) of my car using the OBD-II UART Adapter from Freematics. Data is being sent to an Arduino Mega 2560 that shows the information on a TFT LCD screen and controlls the LED strips.',
        status : 'Finished.',
        description : ['The RGB LED strips turn on according to the RPM of the car. At 800 RPM (idle for my car) there are five LEDs on in each strip, at 4000 RPM (my max revs on a regular drive) the 30 LEDs on each strip turn on.','I can change the color of the LEDs by pressing a button on the screen. I have seven preset colors and the option to turn the LEDs off.','At 3000 and 3500 RPM the text on the screen changes color to show that it’s a good or a perfect time to shift gear. I used to have some LEDs changing color according to this, but it was too annoying.','It also works as a performance box, restarting a time counter each time the car stops and calculates the distance traveled (using the speed and time), stoping the time counter after traveling 1/8 or 1/4 mile. Useful for practicing for drag races anywhere.'],
        images : ['obd1.jpg','obd2.jpg'],
        month : 6,
        year : 2016
    },
    {
        name : 'Leonardo GreenMoov',
        video : '<iframe width="640" height="360" src="https://www.youtube.com/embed/-i4bVY8lEWE" frameborder="0" allowfullscreen=""></iframe>',
        introduction : 'Telepresence robot based on InMoov and controlled by an Oculus Rift and Leap Motion.',
        thumbnail : 'leonardo.jpg',
        summary : 'Leonardo GreenMoov is a 3D printed telepresence robot, based on the InMoov. Its movements are controlled by an Oculus Rift DK2 and a Leap Motion.',
        status : 'As of January, 2016 the project is now managed by the Turing Lab.',
        description : ['Leonardo GreenMoov is a telepresence robot with 3D printed parts based on the InMoov project by Gael Langevin. The objective of the project is giving the user immersion, through intuitive controls.','The head of the robot is controlled by an Oculus Rift DK2. The orientation of the headset is read and used to control the servo motors in the neck of the robot, so it can replicate the head movements of the user. The robot has two cameras as eyes, the video stream captured by the cameras is projected to the screen of the headset.','The movements of the user’s arms are tracked by a Leap Motion and this information is used to control the arms of the robot. By the time that Leonardo was in our lab, it only had one arm.','In January, 2016, the project was transfered to Turing Lab.'],
        images : ['leonardo1.jpg'],
        month : 12,
        year : 2015
    }
];