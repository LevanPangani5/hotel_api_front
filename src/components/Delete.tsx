"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Delete = ({ id }: { id: number }) => {
  const router = useRouter();

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:5274/api/Booking/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${process.env.JWT_TOKEN}`,
      },
    });

    if (res.status == 204) {
      router.push("/");
      toast.success("Booking has been deleted!");
    } else {
      const data = await res.json();
      toast.error(data.message);
    }
  };
  return (
    <button className="bg-red-400 p-2 rounded-full " onClick={handleDelete}>
      <Image src="/delete.png" alt="" width={20} height={20} />
    </button>
  );
};

export default Delete;
