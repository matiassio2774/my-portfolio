import { Card } from "flowbite-react"

function ContactGithub() {
  return (
    <div className="w-5/6 max-w-xs">
  <Card>
    <div className="flex flex-col items-center pb-10">
      <img
        className="mb-3 h-24 w-24 rounded-full shadow-lg"
        src="https://avatars.githubusercontent.com/u/94750147?v=4"
        alt="Bonnie image"
      />
      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        Matias Sio
      </h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        Web Developer
      </span>
      <div className="mt-4 flex space-x-3 lg:mt-6">
        <a
          href="https://github.com/matiassio2774"
          target='_blank'
          className="inline-flex items-center rounded-sm bg-indigo-700 dark:bg-indigo-700 py-2 px-4 text-center text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:hover:bg-indigo-500 dark:focus:ring-blue-800"
        >
          Ver Perfil
        </a>
      </div>
    </div>
  </Card>
</div>
  )
}

export default ContactGithub