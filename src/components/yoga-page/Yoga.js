import React from "react";
import "../yoga-page/yoga.css";

function Yoga() {
  return (
    <div className="yoga-main">
      <div className="container-yoga">
        <div
          id="carouselExampleControls"
          className="carousel slide cara-yoga"
          data-ride="carousel"
        >
          <div className="carousel-inner yoga-inner-cara">
            <div className="carousel-item active">
              <img
                src="https://i.ndtvimg.com/i/2015-10/tadasana_625x350_81444284309.jpg"
                alt="First slide"
                className="img-yoga"
              />
              <p>
                <span className="yoga-det">1. Tadasana (Mountain Pose):</span>{" "}
                This pose teaches one to stand with majestic steadiness like a
                mountain. The word ‘Tada' means a mountain, that's where the
                name comes from. It involves the major groups of muscles and
                improves focus and concentration. It is the starting position
                for all the other asanas.Stand with your heels slightly apart
                and hang your arms besides the torso. Gently lift and spread
                your toes and the balls of your feet, then lay them softly down
                on the floor. Balance your body weight on your feet. Lift your
                ankles and firm your thigh muscles while rotating them inwards.
                As you inhale, elongate your torso and when you exhale release
                your shoulder blades away from your head. Broaden your
                collarbone and elongate your neck. Your ears, shoulders, hips
                and ankles should all be in one line. You can check your
                alignment by standing against the wall initially. You can even
                raise your hands and stretch them. Breathe easy.
              </p>
            </div>
            <div className="carousel-item yoga-inner-cara">
              <img
                className="d-block w-100 img-yoga"
                src="https://i.ndtvimg.com/i/2015-10/vrikshasna_625x350_51444284336.jpg"
                alt="Second slide"
              />
              <p>
                <span className="yoga-det">2. Vrikshasana (Tree Pose)</span>
                This pose gives you a sense of grounding. It improves your
                balance and strengthens your legs and back. It replicates the
                steady stance of a tree. Place your right foot high up on your
                left thigh. The sole of the foot should be flat and placed
                firmly. Keep your left leg straight and find your balance. While
                inhaling, raise your arms over your head and bring your palms
                together. Ensure that your spine is straight and take a few deep
                breaths. Slowly exhale, bring your hands down and release your
                right leg. Back in the standing position repeat the same with
                the other leg.
              </p>
            </div>
            <div className="carousel-item yoga-inner-cara">
              <img
                className="d-block w-100 img-yoga"
                src="https://i.ndtvimg.com/i/2015-10/adho-mukho_625x350_81444284366.jpg"
                alt="Third slide"
              />
              <p>
                <span className="yoga-det">
                  3. Adho Mukho Svanasana (Downward Facing Dog Pose):
                </span>
                This pose stretches hamstrings, chest and lengthens the spine,
                providing additional blood flow to the head. It is will leave
                you feeling energised. Sit on your heels, stretch your arms
                forward on the mat and lower your head. Form a table, like
                pushing your hands, strengthening your legs and slowly raising
                your hips. Press your heels down, let your head hand freely and
                tighten your waist.
              </p>
            </div>
            <div className="carousel-item yoga-inner-cara">
              <img
                className="d-block w-100 img-yoga"
                src="https://i.ndtvimg.com/i/2015-10/naukasana_625x350_41444285027.jpg"
                alt="Fourth slide"
              />
              <p>
                <span className="yoga-det">4. Naukasana (Boat Pose):</span>
                It tightens the abdominal muscles and strengthens shoulders and
                upper back. It leaves the practitioner with a sense of
                stability. Lie back on the mat with your feet together and hands
                by your side. Take a deep breath and while exhaling gently lift
                your chest and feet off the ground. Stretch your hands in the
                direction of your feet. Your eyes, fingers and toes should be in
                one line. Hold till you feel some tension in your navel area as
                your abdominal muscles begin to contract. As you exhale, come
                back to the ground and relax.
              </p>
            </div>
            <div className="carousel-item yoga-inner-cara">
              <img
                className="d-block w-100 img-yoga"
                src="https://i.ndtvimg.com/i/2015-10/cobra-pose-yoga_625x350_61444378786.jpg"
                alt="Fifth slide"
              />
              <p>
                <span className="yoga-det">5. Bhujangasana (Cobra Pose):</span>
                This one will strengthen the lower back muscles while cushioning
                the spine, triceps and opens the chest to promote the
                inhalations. It also makes the spine flexible.Lie on your
                stomach with your feet together and toes flat. Place your hands
                downwards below your shoulders on the mat, lift your waist and
                raise your head while inhaling in. Pull your torso back with the
                support of your hands. Keep your elbows straight and make sure
                you put equal pressure on both palms. Tilt your head back and
                make sure your shoulders are away from your ears. Exhale while
                coming back to the ground.
              </p>
            </div>
            <div className="carousel-item yoga-inner-cara">
              <img
                className="d-block w-100 img-yoga"
                src="https://i.ndtvimg.com/i/2015-10/sukhasana_625x350_61444286107.jpg"
                alt="Fourth slide"
              />
              <p>
                <span className="yoga-det">6. Sukhasna:</span>
                Sukhasna is a comfortable position for pranayama and meditation.
                It gives the practitioner a centering effect. All the other
                asnas are done to eventually make the body feel comfortable to
                be able to sit in this position for meditation. This asna takes
                the yoga practice beyond its physical dimension and helps you
                get in touch with your spiritual side. Sit comfortably on the
                mat with crossed legs (left leg tugged inside the right thigh
                and right leg tugged inside the left thigh). Keep spine
                straight. Place your hands on your knees. You can use the Jnana
                mudra or Chin mudra. Relax your body and breathe gently.
              </p>
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
