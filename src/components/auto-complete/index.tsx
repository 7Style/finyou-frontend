import React, { useState, useEffect, useRef, memo } from 'react'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import { Label } from '@/components/ui/label'

type Suggestion = {
  id: string
  label: string
}

interface IAutoCompleteComponentProps {
  suggestions: Suggestion[]
  placeholder: string
  onSelect: (label: string) => void
}

function AutoCompleteComponent({ suggestions, placeholder, onSelect }: IAutoCompleteComponentProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [filteredSuggestions, setFilteredSuggestions] = useState(suggestions)
  const [value, setValue] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value
    setValue(value)
    setShowSuggestions(true)

    if (value.length > 0) {
      const filtered = suggestions.filter(suggestion => suggestion.label.toLowerCase().includes(value.toLowerCase()))
      setFilteredSuggestions(filtered)
    } else {
      setFilteredSuggestions(suggestions)
    }
  }

  const handleSelectSuggestion = (label: string) => {
    setValue(label)
    setShowSuggestions(false)
    onSelect(label)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])

  return (
    <div className="w-64 relative" ref={ref}>
      <Label htmlFor="autocomplete">{placeholder}</Label>
      <Command className="rounded-lg border">
        <CommandInput
          placeholder={placeholder}
          onClick={() => setShowSuggestions(true)}
          onInput={handleInputChange}
          value={value}
          {...(showSuggestions && { onFocus: () => setShowSuggestions(true) })}
        />
        {showSuggestions && (
          <CommandList className="border-t">
            {filteredSuggestions.length === 0 ? (
              <CommandEmpty>No results</CommandEmpty>
            ) : (
              <CommandGroup heading="Suggestions" className="max-h-[100px] overflow-y-auto">
                {filteredSuggestions.map(suggestion => (
                  <CommandItem key={suggestion.id} onSelect={() => handleSelectSuggestion(suggestion.label)}>
                    {suggestion.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
            <CommandSeparator />
          </CommandList>
        )}
      </Command>
    </div>
  )
}

const AutoComplete = memo(AutoCompleteComponent)
export { AutoComplete }
