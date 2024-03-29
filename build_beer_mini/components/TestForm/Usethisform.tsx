'use client'

import React from 'react';




export default function MenuItemForm(props: any) {

    const webUrl: string = "http://localhost:8080"

    const CreateBeer = async (event: any) => {
        event.preventDefault();
        console.log("Submitted")
    }

    const data = {
        name: String(event.target.name.value),
        style: String(event.target.style.value),
        note1: String(event.target.note1.value),
        note2: String(event.target.note2.value),
        note3: String(event.target.note3.value),
    }

    await fetch(webUrl + "/beercreated", { //beercreated
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    }).then((response) => response.json()).then((data: BeerCreated[]) => {
        props.setBeerCreated(data);

        event.target.name.value = ""
        event.target.style.value = ""
        event.target.note1.value = ""
        event.target.note2.value = ""
        event.target.note3.value = ""
        event.target.abv.value = ""

    })
}

        }

return (
    <div>
        <link rel="stylesheet" href="formStyle.css" />
        <form onSubmit={handleSubmit}>
//        <!--<script src="" href=""></script>-->
            <h1>Create your beer!</h1>

            <fieldset>
                <legend>In what type of barrels do you like your brewski to be brewed?</legend>
                <p><label> <input type="radio" name="frenchOak" required value="French Oak">  </></label></p>
                <p><label> <input type="radio" name="AmericanOak" required value="American Oak">  </></label></p>
                <p><label> <input type="radio" name="Cedar" required value="Cedar">  </></label></p>
            </fieldset>

            <fieldset>
                <legend>What type of flavor notes do you prefer?</legend>
                <label> <input type="checkbox" name="extras" value="fruity"> Fruity </></label>
                <label> <input type="checkbox" name="extras" value="malty"> Malty </></label>
                <label> <input type="checkbox" name="extras" value="sour"> Sour </></label>
                <label> <input type="checkbox" name="extras" value="sweet"> Sweet </></label>
                <label> <input type="checkbox" name="extras" value="bitter"> Bitter </></label>
                <label> <input type="checkbox" name="extras" value="hoppy"> Hoppy </></label>
                <label> <input type="checkbox" name="extras" value="floral"> Floral </></label>
            </fieldset>

            <label>Local Date and Time
                <input type="datetime-local" name="imbibe_time" required>
                </></label>
        </p>

        <p>
            <label>
                <select id="barrelType" name="barrelType">
                    <option value="" selected="selected">Select One</option>
                    <option value="frenchOak">French Oak</option>
                    <option value="americanOak">American Oak</option>
                    <option value="cedar">Cedar</option>
                </select>
            </label>
        </p>

        <p>
            <label>Where was the last place you had a beer?
                <input type="text" name="recentPlace" required list="locations">
                </></label>

            <datalist id="locations">
                <option value="At home">
                    <option value="The beach">
                        <option value="In a cave">
                        </datalist>
                    </p>

                    <p>
                        <label>If animals could talk, which would be the rudest? Enter below
                            <textarea name="comments" maxlength="500"></textarea>
                        </label>
                    </p>

                    <p><div class="animatedBox"><button id="loading-button">Build my Beer!</button>
                        <script src="buttonloader.js"></script></div></p>

                    )
        }

                    export default CreateBeer;