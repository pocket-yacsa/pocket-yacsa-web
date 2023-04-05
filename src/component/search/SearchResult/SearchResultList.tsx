import Link from "next/link";

import { Icon } from "@/component/common/Icon";
import { SearchItem } from "@/component/search/SearchItem";
import type { RecentSearch } from "@/hooks/common";

interface Prop {
  value: string;
  onAddItem: ({ value, type, id }: RecentSearch) => void;
}

export const SearchResultList = ({ value, onAddItem }: Prop) => {
  // const { autoCompletedTags } = useGetTagSearch(value.trim());
  const autoCompletedTags = [{ name: "hello", tagId: 1 }];

  if (!value || autoCompletedTags?.length === 0) {
    return null;
  }
  return (
    <ul className="absolute w-full bg-white">
      {autoCompletedTags?.map((tag) => (
        <li key={tag.tagId}>
          <Link href="#">
            <SearchItem
              searchText={value}
              startComponent={<Icon name="sharp" />}
              tagName={tag.name}
              onClick={() => {
                onAddItem({ value: tag.name, type: "tag", id: tag.tagId });
              }}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};