import Header from "@/components/layout/Header";
import Book from "@/components/library/Book";
import * as MS from "../../components/_styled/mainStyled";
import * as LS from "../../components/_styled/libraryStyled";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Library() {
  const router = useRouter();

  // const [books, setBooks] = useState([]);
  // dummy
  const books = [
    {
      id: 1,
      title: "채식주의자",
      writer: "한강",
      image:
        "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788936434595.jpg",
    },
    {
      id: 2,
      title: "그대의 차가운 손",
      writer: "한강",
      image:
        "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788932013046.jpg",
    },
    {
      id: 3,
      title: "채식주의자",
      writer: "한강",
      image:
        "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788936434595.jpg",
    },
    {
      id: 4,
      title: "그대의 차가운 손",
      writer: "한강",
      image:
        "https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788932013046.jpg",
    },
  ];

  const fetchBooks = async () => {
    try {
      // const response = await API.get(``);
      // const data = response.data;
      // setBooks(data);
      console.log(books);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [books]);

  return (
    <MS.MainContainer>
      <Header path="My Library" />
      <LS.LibraryAdd>
        <LS.LibraryButtonBox
          onClick={() => {
            router.push(`/library/add`);
          }}
        >
          <LS.LibraryAddButton icon={faPlus} />
        </LS.LibraryButtonBox>
      </LS.LibraryAdd>
      {/* Library List Section */}
      <LS.LibraryList>
        {books.map((book, idx) => (
          <Book key={idx} book={book} />
        ))}
      </LS.LibraryList>
    </MS.MainContainer>
  );
}
