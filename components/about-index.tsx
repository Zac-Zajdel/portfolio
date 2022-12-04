import Image from './image'

export default function AboutIndex() {
  return (
    <>
      <div className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8">
            <Image
              src="/static/me.jpeg"
              alt="avatar"
              width={192}
              height={192}
              className="h-48 w-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">
              Zac Zajdel
            </h3>
            <div className="text-gray-500 dark:text-gray-400">
              Full-Stack Software Engineer
            </div>
            <div className="text-gray-500 dark:text-gray-400">
              Indiana University of Pennsylvania
            </div>
            <div className="flex space-x-3 pt-6">
              {/* <SocialIcon kind="mail" href="mailto:zaczajdel213@gmail.com" />
              <SocialIcon kind="linkedin" href="www.google.com" /> */}
            </div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
            <div>Hey fellow tech enthusiast,</div>
            <br />
            My name is Zac and I am based in Dallas, Texas focusing my career on
            web development technologies. You can usually find me working on
            some side project, watching movies, listening to music just about
            24/7, and hanging with friends.
            <br />
            <br />
            With technology, I am a big fan of the React & Vue ecosystems as
            well as Next.js, Nuxt.js, Laravel, Node, PHP, AWS, and a host of
            other technologies which have helped revolutionize how developers
            brings their ideas to life! One thing this industry promises is that
            we will never get bored or complacent which is so refreshing. The
            generosity and commitment of developers worldwide keeps me striving
            to be my best self.
            <br />
            <br />I created this blog in hopes that what I learn and discover
            can be transferred to others. I wanna give to the community rather
            than only take so this is my attempt and if you made it this far
            then let&apos;s connect :)
          </div>
        </div>
      </div>
    </>
  )
}
