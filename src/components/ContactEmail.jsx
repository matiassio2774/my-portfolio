import { Label, Textarea, TextInput, Button } from "flowbite-react";
function ContactEmail() {
  return (
    <>
      <div className="w-full max-w-lg">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email4" value="Tu email" />
          </div>
          <TextInput
            id="email4"
            type="email"
            placeholder="nombre@ejemplo.com"
            required={true}
            icon=""
          />
        </div>

        <div id="textarea">
          <div className="mb-2 block">
            <Label htmlFor="comment" value="Tu mensaje" />
          </div>
          <Textarea
            id="comment"
            placeholder="Escribe aquí..."
            required={true}
            rows={4}
          />
        </div>
        <div className="mt-2">
        <button className="bg-indigo-700 text-white w-32 py-2 mt-2 rounded-sm cursor-default hover:bg-indigo-500 max-w-lg">
            Enviar
          </button>
        </div>
      </div>
    </>
  );
}

export default ContactEmail;
