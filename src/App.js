import React, {useState} from 'react';
import styled from 'styled-components';

const texts = [
  'just wanted to remind you that Incredibles 2 is a hilarious film. You were right this whole time.',
  'you should come to Colorado',
  'we should plan our Mexico trip',
  'I want to come to Philly, can we pick a weekend?',
  'you\'re really handsome and cool and amazing and nice. This is just a reminder.',
  'I miss you',
  'yee yee',
  'do you want to facetime tonight?',
  'you were right, Bummer is awesome and spiders are actually really nice',
  'wanna go to Europe together?',
  'I\'m just hanging outside alone in the dark because that\'s a normal thing to do, wbu?',
];

function App() {
  const [text, setText] = useState(texts[0]);
  const [secretClicks, setSecretClicks] = useState(0);

  const pickNewText = () => {
    const randomTextIndex = Math.floor(Math.random() * texts.length);
    setText(texts[randomTextIndex]);
  }

  if (secretClicks >= 10) {
    return (
      <div className="App">
        <Wrapper>
          <p>
            You're really special to me. I feel so comfortable with you, like I'm just more myself when I'm next to you, like I said the other night.
            Leaving Colorado feels wrong only because being further from you feels so fundamentally stupid. I'm genuinely so upset
            that I won't be 8 minutes from you, and that our movie nights and cafe dates will be rarer. But I'm serious when I say that I'm
            holding on to the hope that at some point, somehow, we can be together. I want that more than just about anything.
            I hope you can hold onto that hope too, because its the only thing making this move even remotely tolerable for me.
            You're incredible, and funny, and lovely, and beautiful, and unbelievably smart. I cannot wait to spend more mornings, days,
            and nights with you.
          </p>
  
          <button onClick={() => setSecretClicks(0)}>Exit secret mode</button>
        </Wrapper>
      </div>
    );
  }

  return (
    <div className="App">
      <Wrapper>
        <Title>Hey, Marith.</Title>
        <p>
          You should probably text me right now. Chances are that I miss you and would love to be talking to you.
          Here are some suggestions of things to say, all of which I would love to receive.
        </p>

        <TextWrapper>
          <TextContent>Hey James, {text}</TextContent>
        </TextWrapper>

        <ButtonWrapper>
          <button onClick={pickNewText}>Use a different text</button>
          <a href={`sms:+12678846019&body=${encodeURIComponent('Hey james, ' + text)}`}>Send to James</a>
        </ButtonWrapper>

        <Small onClick={() => setSecretClicks(secretClicks + 1)}>Click 10 times for a secret.</Small>
      </Wrapper>
    </div>
  );
};

export default App;

const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  position: relative;
  padding: 30px;

  p {
    line-height: 24px;
  }

  button {
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #eee;
    border: 1px solid #ccc;
  }
`;

const Title = styled.h1``;
const TextContent = styled.p``;
const Small = styled.p`
  color: #ccc;
  font-size: 14px;
  text-align: center;
  margin-top: 40px;
`;

const TextWrapper = styled.div`
  border-radius: 10px;
  padding: 5px 20px;
  background-color: #147efb;
  color: #fff;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  
  a {
    padding: 5px 10px;
    border-radius: 5px;
    background-color: #147efb;
    border: 1px solid #blue;
    color: #fff;
    text-decoration: none;
  }
`;
