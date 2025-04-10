// makeVideos.js

function makeVideos(whichArray)
{
    let mainDiv = ce('div');
    ba(mainDiv);

    //-//

    let subDiv = ce('div');
    mainDiv.append(subDiv);

    //-//

    let lance001Container = ce('div');
    lance001Container.style.display = 'flex';
    lance001Container.style.flexDirection = 'column';
    lance001Container.style.width = 385 + 'px';
    subDiv.append(lance001Container);

    //-//

    for (let x = 0; x < whichArray.length; x++)
    {
        let theVideo = ce('video');
        if (online == false)
        {
            theVideo.src = whichArray[x].videoOffline;
        }

        if (online == true)
        {
            theVideo.src = whichArray[x].videoOnline;
        }

        theVideo.style.width = 400 + 'px';
        theVideo.controls = 'true';
        theVideo.currentTime = whichArray[x].start;
        lance001Container.append(theVideo);

        //-//

        let replayContainer = ce('div');
        replayContainer.style.display = 'flex';
        replayContainer.style.flexDirection = 'row';
        lance001Container.append(replayContainer);

        let replayButton = ce('button');
        replayButton.textContent = 'Replay';
        replayButton.onmouseover = function()
        {
            hoverSound();
        };
        replayButton.onclick = function()
        {
            clickSound();
            theVideo.currentTime = whichArray[x].start;

            theVideo.play();
        };
        replayContainer.append(replayButton);

        //-//

        let replayStopButton = ce('button');
        replayStopButton.textContent = 'ReplayStop';
        replayStopButton.onmouseover = function()
        {
            hoverSound();
        };
        replayStopButton.onclick = function()
        {
            clickSound();
            theVideo.pause();
            theVideo.currentTime = whichArray[x].start;
        };
        replayContainer.append(replayStopButton);

        //-//

        let nameLabel = ce('div');
        nameLabel.textContent = 'Name: ';
        lance001Container.append(nameLabel);

        //-//

        let nameValue = ce('strong');
        nameValue.textContent = whichArray[x].name;
        nameLabel.append(nameValue);

        //-//

        let categoryLabel = ce('div');
        categoryLabel.textContent = 'Category: ';
        lance001Container.append(categoryLabel);

        //-//

        let categoryValue = ce('strong');
        categoryValue.textContent = whichArray[x].category;
        categoryLabel.append(categoryValue);

        //-//

        let startLabel = ce('div');
        startLabel.textContent = 'Start: ';
        lance001Container.append(startLabel);

        //-//

        let startValue = ce('strong');
        startValue.textContent = whichArray[x].start;
        startLabel.append(startValue);

        //-//

        let endLabel = ce('div');
        endLabel.textContent = 'End: ';
        lance001Container.append(endLabel);

        //-//
        
        let endValue = ce('strong');
        endValue.textContent = whichArray[x].end;
        endLabel.append(endValue);

        //-//

        let theSourceDetails = ce('details');
        lance001Container.append(theSourceDetails);

        //-//

        let theSourceSummary = ce('summary');
        theSourceSummary.textContent = 'Source';
        theSourceSummary.style.fontWeight = 'normal';
        theSourceDetails.append(theSourceSummary); // summary goes inside details

        //-//

        let offlineSourceLabel = ce('div');
        offlineSourceLabel.textContent = whichArray[x].videoOffline;
        offlineSourceLabel.style.fontWeight = 'bold';
        theSourceDetails.append(offlineSourceLabel);

        //-//

        lance001Container.append(ce('hr'));
    }
}

//----//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2025
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

