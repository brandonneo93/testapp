<script>
  import { Input } from "../../lib/components/ui/input/index";
  export let value = '';
  export let placeholder = 'Enter text...';
  export let disabled = false;
  export let type = 'text';
</script>

{#if type === 'text'}
  <Input
    class="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    bind:value={value}
    type="text"
    placeholder={placeholder}
    disabled={disabled}
  />
{:else if type === 'password'}
  <Input
    class="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    bind:value={value}
    type="password"
    placeholder={placeholder}
    disabled={disabled}
  />
{:else if type === 'email'}
  <Input
    class="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    bind:value={value}
    type="email"
    placeholder={placeholder}
    disabled={disabled}
  />
{:else if type === 'number'}
  <Input
    class="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    bind:value={value}
    type="number"
    placeholder={placeholder}
    disabled={disabled}
  />
{:else}
  <Input
    class="border border-gray-300 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    bind:value={value}
    placeholder={placeholder}
    disabled={disabled}
  />
{/if}
