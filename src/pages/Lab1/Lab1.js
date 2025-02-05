import React from 'react';
import './Lab1.css';
import serial from '../../assets/Lab1/serial.png';
import setup from '../../assets/Lab1/setup.png';
import temp from '../../assets/Lab1/temp.png';
import mic from '../../assets/Lab1/mic.png';
import blink from '../../assets/Lab1/blink.mp4';
import IDE from '../../assets/Lab1/arduinoIDE.png';
import echo from '../../assets/Lab1/echo.png';
import threefloats from '../../assets/Lab1/threefloats.png';
import millis from '../../assets/Lab1/millis.png';

const Lab1 = () => {
  return (
    <div className="lab1">
      <h1>Lab 1</h1>
      <section>
        <h2>Lab 1A</h2>
        <p>
          Welcome to Lab 1A. The objective of this lab is to introduce the Artemis board and explore basic functionalities. The writeup for this lab can be found&nbsp;
          <a href="https://fastrobotscornell.github.io/FastRobots-2025/labs/Lab1.html">here</a>
            . The folder containing all code, including code I created can be found&nbsp;
            <a href="https://github.com/noahjosephwilson/ece4160">here</a>
            . You may need to request access if the folder is private.
        </p>
        <p>
            In setting up this lab, we explored some components of the Artemis board and the Arduino IDE, the main program we used for our embedded software development.
            The remainder of Lab 1A uses these two tools to accomplish basic functionalities.
        </p>
        <h3>Prelab)</h3>
        <p>
            The objective of the Prelab 1A is to download the Arduino IDE, the main tool we will write code in and use to upload to our Arduino board.
            In order to do this, we went to the Arduino IDE website and had to configure the IDE to match our specific SparkFun Redboard Artemis Nano board.
        </p>
        <img src={IDE} alt="Lab 1A Diagram" className="center-image"/>
        <p className="center-text">
            <b>
                Figure 0:&nbsp;
            </b>
            Arduino IDE desktop icon after successful download and configutation.
        </p>
        <h3>Question 1)</h3>
        <p>
          The first step is to use the USBc wire to connect the Artemis Nano to my Mac port. The connection can be tested by opening the Arduino IDE and seeing the USB connection option as well as the red light turned on the Artemis board.
        </p>
        <img src={setup} alt="Lab 1A Diagram" />
        <p className="center-text">
            <b>
                Figure 1:&nbsp; 
            </b>
            image of working setup configuration with light on.
        </p>
        <h3>Question 2)</h3>
        <p>
          The most basic program to test the functionality of an embedded system is to blink and LED. This was done by selecting the Blink example which is already preloaded with the Arduino IDE. This code can be uploaded to the Artemis board and run. The board is working if the LED blinks with the time interval that we expect.
        </p>
        <video controls width="800">
          <source src={blink} type="video/mp4" />
        </video>
        <p className="center-text">
            <b>
                Figure 2:&nbsp;
            </b>
            working Blink program.
        </p>
        <h3>Question 3)</h3>
        <p>
          The next test is to explore the tools given through the Arduino IDE. In particular, we can open the serial monitor in the top right corner of the program. We can run the example program "Example4_Serial" and read the print messages in the serial monitor to ensure that it works properly. To run a program, we open it and upload the code to the board through the IDE.
        </p>
        <img src={serial} alt="Lab 1A Diagram" />
        <p className="center-text">
            <b>
                Figure 3:&nbsp;
            </b>
            working serial monitor test output lines.
        </p>
        <h3>Question 4)</h3>
        <p>
            Now that we have an understanding of how the IDE works, we can explore the hardware capabilities of the Artemis board. One such capability is the internal temperature sensor. We can run the "Example2_analogRead" program and open the serial monitor. We will see the temperature outputs being print constantly. To see how this fluxuates, we can hold the chip between our fingers to see the temperature rise and release it to see the temperature fall.
        </p>
        <img src={temp} alt="Lab 1A Diagram" />
        <p className="center-text">
            <b>
                Figure 4:&nbsp;
            </b>
            temperature readings as seen through serial monitor.
        </p>
        <h3>Question 5)</h3>
        <p>
            We can run the "Example1_MicrophoneOutput" file with our IDE and open the serial monitor to see a continuous outputs of the microphone frequency readings. You can test this hardware by whistling into the board and watching the microphone readings change.
        </p>
        <img src={mic} alt="Lab 1A Diagram" />
        <p className="center-text">
            <b>
                Figure 5:&nbsp;
            </b>
            microphone readings as seen through serial monitor.
        </p>
      </section>
      <section>
        <h2>Lab 1B</h2>
        <p>
          The objective of Lab 1B is to create our own Python code to interact with our Artemis board as well as to understand the Bluetooth functionality of the board. By doing this, we can send commands from the Artemis to the computer wirelessly, through Bluetooth.
        </p>
        <h3>Prelab)</h3>
        <p>
            This prelab was a simple explanation of the Bluetooth functionality of our Artemis board. The information can be found by clicking&nbsp;
            <a href="https://docs.arduino.cc/libraries/arduinoble/">here</a>
            .
        </p>
        <h3>Setup)</h3>
            <p>
            Before creating our programs, we need to install a series of packages. We begin by installing Python or Python3. Using this, we can create a virtual environment to store all of our future installations.
            We then activate our environment and pip install numpy, pyyaml, colorama, nest_asyncio, bleak, and jupyterlab. We can open the "ble_robot_1.2" folder to get our skeleton code. We open jupyter lab so that we can edit the files in this folder.
            On the Arduino IDE, we install ArduinoBLE. We can change the baud rate to 115200 bps. By burning the ble_arduino.ino into the Artemis board, we can get our MAC address.
            </p>
        <h3>Instructions)</h3>
            <p>
                Now that we have our MAC address, we can replace the default address in connections.yaml. Then, we can generate a UUID by importing uuid4 from uuid and running the uuid() function. This UUID can replace the default UUID in the ble_arduino.ino file.
                Now that these two connection addresses are matched in our code with the hardware we work with, we can upload the ble_arduino.ino code to the Artemis board.
            </p>
        <h3>Question 1)</h3>
        <p>
            Our first task wants us to construct a program that allows a user to input a string, sends that to the Artemis board, and returns and prints an augmented string that includes the input string. For example, if the user inputs "Hello World", it should print "Robot says -&gt; Hello World".
            This was done by looking at the examples in the folder we were given. We can combine the logic of the SEND_TWO_INTS and PING commands which allow users to input and allows the board to output respectively. This new command is called ECHO.
        </p>
        <img src={echo} alt="Lab 1B Diagram" />
        <p className="center-text">
            <b>
                Figure 6:&nbsp;
            </b>
            ECHO command in action taking in "Hello World" and output the appropriate response.
        </p>
        <h3>Question 2)</h3>
        <p>
            We can now create a command called SEND_THREE_FLOATS which is used to extract three float values from the Arduino sketch after being input by the user. In order to do this, similar to ECHO, we could create our own function in the ble_arduino.ino file. We must also make sure to add the new command to the cmd_types.py file and the CommandTypes list in the ble_arduino.ino file.
            The main difference between this function and the ECHO command is the data type that we are dealing with. We can maintain the same input and output logic but change the input type from a string to three float values. The output will be switched from a print statement on the computer's display to the Artemis board itself. We can view this activity through the Arduino IDE.
        </p>
        <img src={threefloats} alt="Lab 1B Diagram" />
        <p className="center-text">
            <b>
                Figure 7:&nbsp;
            </b>
            SEND_THREE_FLOATS command inputting .07, 6.0, and 5.0.
        </p>
        <h3>Question 3)</h3>
        <p>
            The GET_TIME_MILLIS command will display the current local time in milliseconds of the format "T:123456".
            The command will use the millis() command to get the current local time from our computer. It will then use code similar to the ECHO command section pertaining to exporting a string. The time is converted into a string and printed onto the user's computer.
        </p>
        <img src={millis} alt="Lab 1B Diagram" />
        <p className="center-text">
            <b>
                Figure 8:&nbsp;
            </b>
            GET_TIME_MILLIS command which outputs the current time in milliseconds below the code.
        </p>
        <h3>Question 4)</h3>
        <p>
          [Your detailed answer for Question 3 of Lab 1B goes here. Discuss the experimental results, their implications, and any conclusions drawn.]
        </p>
        <h3>Question 5)</h3>
        <p>
          [Your detailed answer for Question 3 of Lab 1B goes here. Discuss the experimental results, their implications, and any conclusions drawn.]
        </p>
        <h3>Question 6)</h3>
        <p>
          [Your detailed answer for Question 3 of Lab 1B goes here. Discuss the experimental results, their implications, and any conclusions drawn.]
        </p>
        <h3>Question 7)</h3>
        <p>
          [Your detailed answer for Question 3 of Lab 1B goes here. Discuss the experimental results, their implications, and any conclusions drawn.]
        </p>
        <h3>Question 8)</h3>
        <p>
          [Your detailed answer for Question 3 of Lab 1B goes here. Discuss the experimental results, their implications, and any conclusions drawn.]
        </p>
      </section>
      <section>
        <h2>Discussion</h2>
        <h3>What I Learned)</h3>
        <h3>Challenges)</h3>
        <h3>Unique Solutions)</h3>
      </section>
    </div>
  );
};

export default Lab1;
