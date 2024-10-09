<script>
   // import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "$lib/components/dialog";
   
   // @ts-ignore
  import Dialog from "$lib/components/ui/dialog/dialog.svelte";
   import DialogTrigger from "$lib/components/ui/dialog/dialog-trigger.svelte";
   import DialogContent from "$lib/components/ui/dialog/dialog-content.svelte";
   import DialogHeader from "$lib/components/ui/dialog/dialog-header.svelte";
   import DialogTitle from "$lib/components/ui/dialog/dialog-title.svelte";
   let files = [];
    let progress = 0;
  
    // Simulate file upload process
    function handleUpload(event) {
      files = Array.from(event.target.files);
      let interval = setInterval(() => {
        progress += 10;
        if (progress >= 100) {
          clearInterval(interval);
          progress = 100;
        }
      }, 300);
    }
  </script>
  
  <Dialog>
    <DialogTrigger>
      <button class="bg-blue-500 text-white px-4 py-2 rounded">Upload Files</button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Upload & Attach Files</DialogTitle>
      </DialogHeader>
      <div class="p-4">
        <!-- Big box for uploading files -->
        <label class="block w-full border-2 border-dashed border-gray-300 p-12 text-center">
          <input type="file" multiple on:change={handleUpload} class="hidden" />
          <p>Click or drag files to this area to upload</p>
        </label>
  
        <!-- Display progress after files are selected -->
        {#if files.length > 0}
          <div class="mt-4">
            {#each files as file}
              <div class="mt-2">
                {file.name} - {progress}%
                <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div class="bg-blue-600 h-2.5 rounded-full" style="width: {progress}%;"></div>
                </div>
              </div>
            {/each}
          </div>
        {/if}
      </div>
    </DialogContent>
  </Dialog>
  
  <style>
    /* Style for modal and upload area */
  </style>
  