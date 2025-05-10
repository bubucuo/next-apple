"use server";

export const fetchUser2 = async (prevState, formData) => {
  const txt = formData.get("name")?.toString() || Math.random().toString();

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(txt);
    }, 1000);
  });
};
