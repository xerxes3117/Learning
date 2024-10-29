package com.example.myapplication

import android.view.LayoutInflater
import android.view.ViewGroup
import android.widget.CheckBox
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.example.myapplication.databinding.TasksRecyclerViewRowBinding

class TaskRecyclerViewAdapter : RecyclerView.Adapter<TaskRecyclerViewAdapter.ViewHolder>() {
    private val taskList = ArrayList<TaskModel>()

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ViewHolder {
        val layoutInflater = LayoutInflater.from(parent.context)
        val view = TasksRecyclerViewRowBinding.inflate(layoutInflater, parent, false)
        return ViewHolder(view)
    }

    override fun onBindViewHolder(holder: ViewHolder, position: Int) {
        holder.isDone.isChecked = taskList[position].isDone
        holder.taskText.text = taskList[position].taskText
    }

    override fun getItemCount(): Int {
        return taskList.size
    }

    class ViewHolder(private val binding: TasksRecyclerViewRowBinding) :
        RecyclerView.ViewHolder(binding.root) {
        val isDone: CheckBox = binding.checkBox
        val taskText: TextView = binding.taskTextView
    }

    fun addTask(task: TaskModel) {
        taskList.add(task)
        notifyItemInserted(taskList.size - 1)
    }

    fun removeTask(task: TaskModel) {
        val index = taskList.indexOf(task)
        taskList.removeAt(index)
        notifyItemRemoved(index)
    }

    fun setTaskList(taskList: ArrayList<TaskModel>) {
        this.taskList.clear()
        this.taskList.addAll(taskList)
        notifyItemRangeInserted(0, taskList.size)
    }
}