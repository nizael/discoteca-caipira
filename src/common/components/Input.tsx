interface IInputProps {
  label?: string
  id?: string
  name?: string
  placeholder?: string
  required?: boolean
  type?: 'text' | 'number'
}
export const Input = ({ label, id, name, placeholder, required, type }: IInputProps) => {
  return (
    <label htmlFor={id} className="flex flex-col gap-2">
      <span>{label}</span>
      <input required={required} className="p-2  border rounded-md" id={id} name={name} type={type || "text"} placeholder={placeholder} />
    </label>
  )
}