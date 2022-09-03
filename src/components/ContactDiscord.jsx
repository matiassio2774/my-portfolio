import { Card } from "flowbite-react"
import discord from '../assets/discord.png'

function ContactDiscord() {
  return (
    <div className="w-5/6 max-w-xs">
  <Card>
    <div className="flex flex-col items-center pb-10">
      <img
        className="mb-3 h-24 w-24 rounded-full shadow-lg"
        src={discord}
        alt="Bonnie image"
      />
      <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
        Mati'.#3306
      </h5>
      <span className="text-sm text-gray-500 dark:text-gray-400">
        Discord Username and Tag
      </span>
    </div>
  </Card>
</div>
  )
}

export default ContactDiscord