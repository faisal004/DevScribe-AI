import React from 'react'
import { trpc } from '@/app/_trpc/client'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import Image from 'next/image'

interface Formfields {
  name: string
  description: string
}

function CreateFolderModal() {
  const { mutate: createFolder } = trpc.folder.createFolder.useMutation({
    onSuccess: () => {
      alert('Folder created successfully')
    },
    onSettled: () => {
      reset()
    },
    onError: () => {
      alert('Error creating folder')
    },
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Formfields>()
  const onSubmit: SubmitHandler<Formfields> = async (data: any) => {
    const { name, description } = data
    await createFolder({
      folderName: name,
      folderDescription: description,
    })
  }
  return (
    <>
      <DialogContent className=" lg:w-[30%]">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center gap-2">
            {' '}
            Create new folder{' '}
          </DialogTitle>
          <DialogDescription className="w-full flex flex-col   justify-center mx-auto ">
            <form
              action=""
              className="flex flex-col gap-3 mt-5 "
              onSubmit={handleSubmit(onSubmit)}
            >
              <div>Name</div>
              <input
                {...register('name', { required: 'Name is required' })}
                type="text"
                placeholder="Name"
                className="h-7 p-2 text-black rounded-none outline-2 outline-zinc-600 border-2 border-black"
              />
              {errors.name && (
                <div className="text-red-500">{errors.name.message}</div>
              )}
              <div>Description</div>

              <input
                {...register('description', {
                  required: 'Description is required',
                })}
                type="text"
                placeholder="Description"
                className="h-7 p-2 text-black rounded-none outline-2 outline-zinc-600 border-2 border-black"
              />
              {errors.description && (
                <div className="text-red-500">{errors.description.message}</div>
              )}
              <button
                disabled={isSubmitting}
                type="submit"
                className="px-8 py-2 rounded-md bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200"
              >
                {isSubmitting ? 'Creating' : 'Create'}
              </button>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </>
  )
}

export default CreateFolderModal