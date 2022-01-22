import React from "react";
import "../yoga-page/yoga.css";
// import { useLocation } from "react-router-dom";

function Yoga() {
  //   const loc = useLocation();
  //   const heartRate = loc.state.heartRate;
  return (
    <div className="yoga-main">
      <div className="container-yoga">
        {/* <h3>{`Your heart Rate is ${heartRate}`}</h3> */}
        <div
          id="carouselExampleControls"
          className="carousel slide cara-yoga"
          data-ride="carousel"
        >
          <div className="carousel-inner yoga-inner-cara">
            <div className="carousel-item active">
              <strong>1. Standing forward bend</strong>
              <br />
              <br />
              <img
                src="https://www.fountainhead.com.au/wp-content/uploads/2016/07/standing-forward-bend-yoga-pose-1024x780.jpg"
                alt="First slide"
                className="img-yoga"
              />
              <strong>How to do the pose:</strong>
              <br />
              Reach tall and exhale forward, then bend knees enough to be able
              to place your palms on the floor, with head pressed against your
              legs. Be aware of your spine stretching in different directions as
              you pull your head down and in. For a deeper stretch, try to
              straighten the legs. Hold this pose for 6-8 breaths, then whilst
              inhaling, stretch arms outwards and raise them and your torso back
              to the standing position
              <br />
              <br />
              <strong>Benefits of this pose:</strong>
              <ul>
                <li>Stretches hamstrings, thighs and hips</li>
                <li>
                  Effective for stress relief, fatigue and mild depression.
                </li>
              </ul>
            </div>
            <div className="carousel-item yoga-inner-cara">
              <span className="yoga-det">2. Easy Pose </span>
              <br />
              <br />
              <img
                className="d-block w-100 img-yoga"
                src="https://www.fountainhead.com.au/wp-content/uploads/2016/07/easy-yoga-pose-1024x800.jpg"
                alt="Second slide"
              />
              <strong>
                How to do the pose: <br />
              </strong>
              Sit up straight, then extend your legs in front of your body, then
              with knees wide, place each foot beneath the opposite knee and
              cross your legs in toward your torso.&nbsp;With palms down, place
              hands onto your knees.&nbsp;Align head, neck, and spine together
              and sit with your weight balanced. Lengthen spine, but soften your
              neck and gently relax your feet and thighs.&nbsp;Stay in this
              position for about a minute, then gently release and change the
              cross of your legs.
              <br />
              <strong>Benefits of this pose:</strong>
              <ul>
                <li>Opens hips, lengthens spine and promotes serenity</li>
                <li>Relieves physical and mental exhaustion</li>
                <li>Eliminates anxiety.</li>
              </ul>
            </div>
            <div className="carousel-item yoga-inner-cara">
              <p>
                <strong> 3. Corpse pose&nbsp;</strong>
              </p>
              <img
                className="d-block w-100 img-yoga"
                src="https://www.fountainhead.com.au/wp-content/uploads/2016/07/corpse-yoga-pose-1024x728.jpg"
                alt="Third slide"
              />
              <>
                <p>
                  <strong>How to do the pose:</strong>
                </p>
                <p>
                  Lie flat on back with legs close together but without
                  touching, arms at sides with palms facing up.&nbsp;Let eyes
                  and face soften and close eyes, while breathing
                  deeply.&nbsp;Starting at the top of your head, bring your
                  attention to each part of your body until you reach your
                  toes.&nbsp;Hold this position for 4-5 minutes.
                </p>
                <p>
                  <strong>Benefits of this pose:</strong>
                </p>
                <ul>
                  <li>Full body relaxation by putting body at ease</li>
                  <li>
                    Slows breathing, lowers blood pressure and quietens the
                    nervous system.
                  </li>
                </ul>
              </>
            </div>
            <div className="carousel-item yoga-inner-cara">
              <p>
                <strong>4. Head to knee forward bend</strong>
              </p>
              <img
                className="d-block w-100 img-yoga"
                src="https://www.fountainhead.com.au/wp-content/uploads/2016/07/head-to-knee-forward-bend-yoga-pose-1024x753.jpg"
                alt="Fourth slide"
              />

              <p>
                <strong>How to do the pose:</strong>
              </p>
              <p>
                Sit straight with legs extended, bend left leg and bring the
                sole of your foot to the upper inside right thigh. Your left
                knee should rest on the floor.&nbsp;Put both palms on either
                side of right leg and inhale.&nbsp;Turn towards the extended leg
                and exhale while folding forward.&nbsp;Hold for 5-6 breaths and
                repeat the pose on the other side.
              </p>
              <p>
                <strong>Benefits of this pose:</strong>
              </p>
              <ul>
                <li>Relieves mild depression and anxiety</li>
                <li>
                  Calms the brain and helps with headaches and fatigue, even
                  insomnia.
                </li>
              </ul>
            </div>
            <div className="carousel-item yoga-inner-cara">
              <span className="yoga-det">5. Bridge pose :</span>
              <br />
              <img
                className="d-block w-100 img-yoga"
                src="https://www.fountainhead.com.au/wp-content/uploads/2016/07/bridge-yoga-pose-1024x673.jpg"
                alt="Fifth slide"
              />
              <p>
                <strong>How to do the pose:</strong>
              </p>
              <p>
                Lie flat on back and bend both knees, place feet flat on the
                floor at hip width apart. Slide arms alongside the body with
                palms facing down.&nbsp;Inhale and lift the hips up, rolling
                spine off the floor. Squeeze knees lightly together to keep the
                knees hip width apart.&nbsp;Press down into the arms and
                shoulders to open the chest upwards. Engage legs and buttocks to
                lift the hips higher.&nbsp;Breathe and hold for 4-8 breaths.
              </p>
              <p>
                <strong>Benefits of this pose:</strong>
              </p>
              <ul>
                <li>Reduces anxiety, fatigue, backaches and insomnia</li>
                <li>Provides gentle stretching of the legs and back.</li>
              </ul>
            </div>
            <div className="carousel-item yoga-inner-cara">
              <span className="yoga-det">6. Childs pose</span>
              <img
                className="d-block w-100 img-yoga"
                src="https://www.fountainhead.com.au/wp-content/uploads/2016/07/childs-yoga-pose-1024x710.jpg"
                alt="Fourth slide"
              />
              <p>
                <strong>How to do the pose:</strong>
              </p>
              <p>
                Kneel on a yoga mat with legs together and slowly sit back onto
                heels.&nbsp;Extend torso up and bend forward from the hips so
                your chest rests on your thighs and your forehead rests on the
                ground in front of you.&nbsp;Let shoulders curl around and rest
                hands next to your feet with your palms up.&nbsp;Hold this
                position for 5 – 6 breaths.
              </p>
              <p>
                <strong>Benefits of this pose:</strong>
              </p>
              <ul>
                <li>Quietens the nervous system and lymphatic system</li>
                <li>The resting posture eases stress and soothes the mind.</li>
              </ul>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon ic-cara"
              aria-hidden="true"
            ></span>
            <span className="sr-only"></span>
          </a>
          <a
            className="carousel-control-next "
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon ic-cara"
              aria-hidden="true"
            ></span>
            <span className="sr-only"></span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Yoga;
