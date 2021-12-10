import React from "react";
import { useSelector } from 'react-redux';
// import { Route, Switch } from "react-router-dom";
import './NoteDesk.css';

function NoteDesk() {
  const sessionUser = useSelector(state => state.session.user);

  const quotes = [
    `I'm sick of following my dreams. I'm just going to ask them where they're going and hook up with them later.`,
    `Is a hippopotamus a hippopotamus, or just a really cool Opotamus?`,
    `I like refried beans. That's why I wanna try fried beans, because maybe they're just as good and we're just wasting time. You don't have to fry them again after all.`,
    `I want to be a race car passenger: just a guy who bugs the driver. Say, man, can I turn on the radio? You should slow down. Why do we gotta keep going in circles? Can I put my feet out the window? Man, you really like Tide.`,
    `This one commercial said, "Forget everything you know about slipcovers." So I did, and it was a load off of my mind. Then the commercial tried to sell slipcovers, but I didn't know what they were!`,
    `An escalator can never break: It can only become stairs. You should never see an "Escalator Temporarily Out Of Order" sign, just "Escalator Temporarily Stairs. Sorry for the convenience."`,
    `My friend showed me a photo and said "Here's a picture of me when I was younger". Every picture is of you when you were younger.`,
    `I called the hotel operator and she said, "How can I direct your call?' I said, "Well, you could say "Action!", and I'll begin to dial. And when I say "Goodbye", then you can yell "Cut!"`,
    `On a traffic light, green means "go" and yellow means "yield." But on a banana, it's just the opposite. Green means "hold on," yellow means "go ahead," and red means, "where did you get that banana?"`
  ];
  const randomIndex = Math.floor(Math.random() * quotes.length);

  if (sessionUser) {
    return (
      <div className='quotes'>
        <figure>
          <blockquote>
            <p>{quotes[randomIndex]}</p>
          </blockquote>
          <figcaption>A great philosopher</figcaption>
        </figure>
      </div>
    )
  }
  return null;
}

export default NoteDesk;
