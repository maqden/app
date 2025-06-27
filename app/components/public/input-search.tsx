import React, {forwardRef, useEffect, useImperativeHandle, useRef} from "react";
import {useSearchParams} from "react-router";
import {Input} from "~/components/ui/input";
import {Search, X} from "lucide-react";

const InputSearch = forwardRef<HTMLInputElement, React.ComponentPropsWithRef<"input">>((props, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const [value, setValue] = React.useState(searchParams.get("q") ?? "");

    useImperativeHandle(ref, () => inputRef.current!, []);

    useEffect(() => setValue(searchParams.get("q") ?? ""), [searchParams]);

    useEffect(() => {
      const params = new URLSearchParams(location.search);
      value ? params.set("q", value) : params.delete("q");
      setSearchParams(params, {replace: true});
    }, [value]);

    return (
      <div className="group flex items-center justify-between bg-input w-full rounded-lg px-4">
        <div className="shrink">
          <Search className="size-6 text-muted-foreground"/>
        </div>

        <div className="grow">
          <Input
            {...props}
            value={value}
            ref={inputRef}
            autoFocus={true}
            onChange={(e) => setValue(e.target.value)}
            placeholder="O que você gostaria de encontrar?"
            className="bg-transparent text-input-foreground px-2 border-none focus-visible:border-none"
          />
        </div>

        <div className="shrink">
          {value && (
            <X
              className="clickable size-5 text-muted-foreground cursor-pointer"
              onClick={() => {
                setValue("");
                inputRef.current?.focus();
              }}
            />
          )}
        </div>
      </div>
    );
  }
);

InputSearch.displayName = "InputSearch";

export default InputSearch;
