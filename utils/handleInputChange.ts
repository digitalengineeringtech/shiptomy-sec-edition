export const handleInputChange = <T extends object>(
  event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setFormData: React.Dispatch<React.SetStateAction<T>>
) => {
  const { name, value, type } = event.target;
  setFormData((prev) => ({
    ...prev,
    [name]: type === "number" ? (value === "" ? "" : Number(value)) : value,
  }));
};
